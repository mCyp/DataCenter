<template>
    <!-- 通用的头部栏 -->
    <div class="header">
        <div class="logo">
            <img src="../../assets/img/header-logo.png" style="height:13%;width:13%;vertical-align: middle">
            <span style="padding-left: 20px">海战平台总体性能数据中心</span>
        </div>

        <div class="header-tab">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    <img src="../../assets/img/header-page-selected.png">
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <img src="../../assets/img/header-data.png">
                    <span slot="title">数据群</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <img src="../../assets/img/header-dm.png">
                    <span slot="title">数据挖掘</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <img src="../../assets/img/header-du.png">
                    <span slot="title">数据上传</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <img src="../../assets/img/header-person.png">
                    <span slot="title">个人信息</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                activeIndex:'1'
            }
        },
        methods:{
            handleSelect(key,keyPath){
                console.log(key,keyPath)
            }
        }
    }
</script>

<style scoped>
    .header{
        position: relative;
        box-sizing: border-box;
        height: 72px;
        width: 100%;
        font-size: 22px;
        color: black;
    }
    .logo{
        padding-left: 50px;
        float: left;
        width: 400px;
        line-height: 72px;
        color: #0F3362;
        font-weight: bold;
    }
    .header-tab{
        float: right;
        padding-right: 50px;
    }
    img{
        height: 36px;
        width: 36px;
        padding-right: 10px;
    }



</style>