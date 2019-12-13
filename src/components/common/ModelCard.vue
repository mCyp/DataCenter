<template>
    <el-card shadow="hover" :body-style="{padding:'0 10px'}" class="card-body"
             v-on:click="dialogVisible=!dialogVisible">
        <img v-bind:src="modelData.imgUrl" alt="模型图片" class="img">
        <div>
            <h4>{{modelData.name}} <span class="date">{{modelData.date}}</span></h4>
            <div class="type">性能：{{modelData.type}}</div>
            <div class="type">来源：{{modelData.source}}</div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ModelCard",
        props: ['modelData'],
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    /*卡片主体*/
    .card-body {
        height: 100%;
    }

    .img {
        width: 100%;
        height: 160px;
        display: block;
    }

    h4 {
        color: #0F3362;
        margin: 5px 0;
    }

    .date {
        float: right;
        font-size: 12px;
        color: #909399;
    }

    .type {
        font-size: 12px;
        color: #909399;
        height: 20px;
    }


</style>