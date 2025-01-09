<template>
    <div class="row justify-content-around">
        <div class="col-md-7">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">New Apartment</h5>
                    <CreateForm :fields="fields" 
                        :initial-values="{}"
                        @submit="handleSubmit"
                        :processing="processing">
                    </CreateForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import CreateForm from '@/components/form/CreateForm.vue'
    import * as yup from 'yup'
    import {useAlertStore} from '@/store/alert'
    import { useApartmentsStore } from '@module/propertyListing/store/apartments'

    const processing = ref(false)
    const alertStore = useAlertStore()
    const apartmentsStore = useApartmentsStore()

    const fields = computed(() => [
        {
            label: "Name of apartment",
            name: "name",
            rules: yup.string().required()
        },
        {
            label: "Description",
            name: "description",
            rules: yup.string().required(),
            as: "wysiwyg"
        },
        {
            label: "Location",
            name: "location",
            rules: yup.string().required(),
            as: "textarea",
            rows: 2
        },
        {
            label: "Price",
            name: "price",
            rules: yup.number().min(0),
            placeholder: "Enter price in Naira"
        },
        {
            label: "Duration",
            name: "duration",
            rules: yup.string().required()
        },
        {
            label: "Images",
            name: "images",
            as: "filepond",
            acceptedFileTypes: ['image/jpg', 'image/jpeg', 'image/png'],
            rules: yup.array().required(),
            allowMultiple: true
        }
    ])

    const handleSubmit = (data, actions) => {
        processing.value = true;
        apartmentsStore.add(data).then(r => {
            processing.value = false
            actions.resetForm()
            alertStore.add("Done")
        }).catch(e => {
            processing.value = false;
            alertStore.add(e.response.data, "danger");
        })
    }
</script>

<style lang="scss" scoped>

</style>