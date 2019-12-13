<template>
    <svg class="svg-icon" aria-hidden="true">
        <use v-bind:xlink:href="('#'+iconClass)"></use>
    </svg>
</template>

<script>
    export default {
        name: "IconSvg",
        props:{
            iconClass:{
                type:String,
                require:true
            }
        }
    }
</script>

<style scoped>
    .svg-icon{
        width: 1em;
        height: 1em;
        font-size: 18px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>