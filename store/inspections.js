import { defineStore } from 'pinia';
import { Request, storeGetter, updateStoreDataSingle, updateStoreData, storeLoaderController } from '@/helpers';
import _ from 'lodash';

export const useInspectionsStore = defineStore('useInspectionsStore', {
    state: () => {
        return {
            data: [],
            scheduled: [],
            unscheduled: [],
            processing: false,
            fetching: false,
            limit: 100,
            offset: 0,
            lastTimeOut: null
        }
    },
    actions: {
        async loadFromServer(params = {}) {
            for (var k in params) {
                //return when all data are not ready
                if (params[k] == undefined) return;
            }
            this.fetching = true;
            this.processing = true;
            const req = new Request;
            await req.post(req.root+'/listing-api/properties/get/inspections', {
                limit: this.limit,
                offset: this.offset,
                ...params
            }).then(r => {
                if ("id" in params) {
                    this.data = updateStoreDataSingle(this.data, r.data)
                } else {
                    this.data = updateStoreData(this.data, r.data)
                    if (r.data.length >= this.limit) {
                        if('id' in params) {
                            this.offset = 0
                            return;
                        }
                        this.offset = this.limit + this.offset
                        storeLoaderController(this, () => {
                            this.loadFromServer(params)
                        })
                    } else {
                        this.offset = 0
                        if(this.lastTimeOut != null) {
                            clearTimeout(this.lastTimeOut)
                        }
                        this.lastTimeOut = setTimeout(() => {
                            this.fetching = false
                        }, 3600000)
                    }
                }
                
            })
        },

        async loadScheduledFromServer(params = {}) {
            for (var k in params) {
                //return when all data are not ready
                if (params[k] == undefined) return;
            }
            this.fetching = true;
            this.processing = true;
            const req = new Request;
            await req.post(req.root+'/listing-api/properties/get/scheduled-inspections', {
                limit: this.limit,
                offset: this.offset,
                ...params
            }).then(r => {
                if ("id" in params) {
                    this.scheduled = updateStoreDataSingle(this.scheduled, r.data)
                } else {
                    this.scheduled = updateStoreData(this.scheduled, r.data)
                    if (r.data.length >= this.limit) {
                        if('id' in params) {
                            this.offset = 0
                            return;
                        }
                        this.offset = this.limit + this.offset
                        storeLoaderController(this, () => {
                            this.loadScheduledFromServer(params)
                        })
                    } else {
                        this.offset = 0
                        if(this.lastTimeOut != null) {
                            clearTimeout(this.lastTimeOut)
                        }
                        this.lastTimeOut = setTimeout(() => {
                            this.fetching = false
                        }, 3600000)
                    }
                }
                
            })
        },

        async loadUnscheduledFromServer(params = {}) {
            for (var k in params) {
                //return when all data are not ready
                if (params[k] == undefined) return;
            }
            this.fetching = true;
            this.processing = true;
            const req = new Request;
            await req.post(req.root+'/listing-api/properties/get/unscheduled-inspections', {
                limit: this.limit,
                offset: this.offset,
                ...params
            }).then(r => {
                if ("id" in params) {
                    this.unscheduled = updateStoreDataSingle(this.unscheduled, r.data)
                } else {
                    this.unscheduled = updateStoreData(this.unscheduled, r.data)
                    if (r.data.length >= this.limit) {
                        if('id' in params) {
                            this.offset = 0
                            return;
                        }
                        this.offset = this.limit + this.offset
                        storeLoaderController(this, () => {
                            this.loadUnscheduledFromServer(params)
                        })
                    } else {
                        this.offset = 0
                        if(this.lastTimeOut != null) {
                            clearTimeout(this.lastTimeOut)
                        }
                        this.lastTimeOut = setTimeout(() => {
                            this.fetching = false
                        }, 3600000)
                    }
                }
                
            })
        },

        abort() {
            this.dbtable.abort()
            this.fetching = false;
        }
    },
    getters: {
        all: (state) => {
            if (!state.fetching) {
                state.loadFromServer()
            }
            return state.data;
        },
        get: (state) => {
            const data = state.data
            return (params = {}, ...exclude) => {
                return storeGetter(state, data, (tempParams) => {
                    state.loadFromServer(tempParams)
                }, params, exclude)
            }
        },
        getScheduled: (state) => {
            const data = state.scheduled
            return (params = {}, ...exclude) => {
                return storeGetter(state, data, (tempParams) => {
                    state.loadScheduledFromServer(tempParams)
                }, params, exclude)
            }
        },
        getUnscheduled: (state) => {
            const data = state.unscheduled
            return (params = {}, ...exclude) => {
                return storeGetter(state, data, (tempParams) => {
                    state.loadUnscheduledFromServer(tempParams)
                }, params, exclude)
            }
        }
    }
})
