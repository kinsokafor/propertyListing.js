<template>
<div class="box-container">
    <img :src="iconClass" alt="">
    <h4>{{title}}</h4>
    <p>{{count}} {{surfix}}</p>
</div>
</template>

<script setup>
    import apartments from '../assets/svg/apartments.svg'

    const props = defineProps({
        endPoint: String,
        title: {
            type: String,
            default: ""
        },
        layoutStyle: {
            type: String,
            default: "default"
        },
        color: {
            type: String,
            default: "var(--blue)"
        },
        textColor: {
            type: String,
            default: "var(--highlight1)"
        },
        iconClass: {
            type: String,
            default: apartments
        },
        surfix: {
            type: String,
            default: ""
        },
        prefix: {
            type: String,
            default: ""
        },
        link: {
            type: [String, Boolean],
            default: false
        },
        count: Number
    })
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.box-container {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background: rgb(240, 242, 244);
    h4 {
        font-weight: 400;
        font-size: 1.2rem;
    }
    p {
        font-size: 0.9rem;
    }
}
</style>
