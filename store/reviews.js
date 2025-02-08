import { defineStore } from "pinia";
import {
  Request,
  storeGetter,
  updateStoreDataSingle,
  updateStoreData,
} from "@/helpers";
import _ from "lodash";

export const useReviewsStore = defineStore("useReviewsStore", {
  state: () => {
    return {
      data: {
        apartment: {},
        property: {},
      },
      processing: false,
      fetching: false,
      limit: 100,
      offset: 0,
      dbtable: new Request(),
      lastTimeOut: null,
    };
  },
  actions: {
    async loadFromServer(params = {}) {
      for (var k in params) {
        //return when all data are not ready
        if (params[k] == undefined) return;
      }
      if (
        params?.content_type === undefined ||
        params?.content_id === undefined
      ) {
        return;
      }
      if (this.data[params.content_type][params.content_id] === undefined) {
        this.data[params.content_type][params.content_id] = [];
      }
      this.fetching = true;
      this.processing = true;
      await this.dbtable
        .get(this.dbtable.root+"/listing-api/reviews", {
          limit: this.limit,
          offset: this.offset,
          order: "asc",
          order_by: "id",
          ...params,
        })
        .then((r) => {
          if ("id" in params) {
            this.data[params.content_type][params.content_id] = updateStoreDataSingle(
              this.data[params.content_type][params.content_id],
              r.data
            );
          } else {
            this.data[params.content_type][params.content_id] = updateStoreData(
              this.data[params.content_type][params.content_id],
              r.data
            );
            if (r.data.length >= this.limit) {
              if ("id" in params) {
                this.offset = 0;
                return;
              }
              this.offset = this.limit + this.offset;
              this.loadFromServer(params);
            } else {
              this.offset = 0;
              if (this.lastTimeOut != null) {
                clearTimeout(this.lastTimeOut);
              }
              this.lastTimeOut = setTimeout(() => {
                this.fetching = false;
              }, 3600000);
            }
          }
        });
    },

    abort() {
      this.dbtable.abort();
      this.fetching = false;
    },
  },
  getters: {
    all: (state) => {
      if (!state.fetching) {
        state.loadFromServer();
      }
      return state.data;
    },
    get: (state) => {
      const data = state.data;
      return (params = {}, ...exclude) => {
        return storeGetter(
          state,
          data[params.content_type][params.content_id] ?? [],
          (tempParams) => {
            state.loadFromServer(tempParams);
          },
          params,
          exclude
        );
      };
    },
  },
});
