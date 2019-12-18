<template>
    <div class="img-box">
        <el-card class="card-box" shadow="never">
            <img src="../../../assets/img/upload-success1.jpg" class="img">
            <h3 class="title">成功</h3>
            <p class="content">配置信息成功录入！</p>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UploadSuccess"
    }
</script>

<style scoped>
    .img-box{
       width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        padding: 20px;
    }
    .card-box{
        width: 360px;
        height: 360px;
        margin: 0 auto;
    }
    .img{
        height: 200px;
        margin: auto;
    }
    .title{
        margin: 10px;
    }
    .content{
        font-size: 14px;
    }
</style>