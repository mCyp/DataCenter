<template>
    <div>
        <base-step></base-step>
    </div>

</template>

<script>
    import BaseStep from "@/components/common/BaseStep";
    export default {
        name: "DataUpload",
        components:{
            BaseStep
        }
    }
</script>

<style scoped>
    .step-container{
        padding-top: 40px;
        position: relative;
        height: 100px;
        width: 100%;
        box-sizing: content-box;
        background: #eeeeee;
    }
    .step-lay{
        height: 60px;
        width: 100%;
    }
</style>