<template>
    <div class="detail-bg">
        <div class="search-lay">
            <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" v-model="searchName" class="search-input">
            </el-input>
        </div>
        <div class="tab-lay">
            <el-menu mode="horizontal" :default-active="1" background-color="#00000000" style="padding-left: 20px" >
                <el-menu-item index="1">综合</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">性能</template>
                    <el-menu-item index="2-1">性能优先</el-menu-item>
                    <el-menu-item index="2-2">性能倒序</el-menu-item>
                    <el-menu-item index="2-3">其他</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">来源</template>
                    <el-menu-item index="3-1">水动力</el-menu-item>
                    <el-menu-item index="3-2">环境</el-menu-item>
                    <el-menu-item index="3-3">硬性</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">
                    <span>时间</span>
                    <i class="el-icon-d-caret"></i>
                </el-menu-item>
            </el-menu>
        </div>
        <div>
            <el-row>
                <el-col :span="10">

                </el-col>
                <el-col :span="2">

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailContent",
        data(){
            return{
                searchName:'',
            }
        }
    }
</script>

<style scoped>
    .detail-bg{
        background-color: #F4F4F4;
    }
    .search-lay{
        width: 100%;
        height: 100px;
        position: relative;
    }
    .search-input{
        margin: auto;
        bottom: 0;
        top: 0;
        left: 20px;
        position: absolute;
        width: 500px;
        height: 40px;
        line-height: 40px;
        background-color: white;
        border-radius: 22px;
        box-shadow: 0 1px 4px 0 rgba(32, 33, 36, .28);
        box-sizing: content-box;
        cursor: text;
        font-size: 16px;
    }
    .search-input /deep/ .el-input__inner {
        height: 36px;
        width: 90%;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: none;
        border: none;
        background-color: transparent;
        display: block;
        font-size: 14px;
    }
    .tab-lay .el-menu-item {
        padding: 0 10px;
        font-size: 12px;
        width: 90px;
        text-align: center;
        background-color: #F4F4F4;
    }
    .tab-lay .el-menu--horizontal>.el-menu-item {
        float: left;
        height: 40px;
        line-height: 40px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
    .tab-lay .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
</style>