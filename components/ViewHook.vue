<template>
    <div></div>
</template>

<script setup>
    import {onMounted, watch} from 'vue'
    import {Request} from '@/helpers'

    const req = new Request()

    const props = defineProps({
        contentId: Number,
        contentType: {
            type: String,
            default: 'apartment',
            validator: (prop) => ['apartment', 'property'].includes(prop)
        }
    })

    const update = () => {
        if(props.contentId === undefined) return;
        req.post(
            req.root+"/listing-api/views/update/"+props.contentId, 
            {
                content_type: props.contentType
            }
        ).then(r => {
            // do nothing
        })
    }

    onMounted(() => {
        update();
    })

    watch(() => props.contentId, () => {
        update();
    })

</script>

<style lang="scss" scoped>

</style>