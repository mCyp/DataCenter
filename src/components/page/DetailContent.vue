<template>
    <div class="detail-bg">
        <div class="search-lay">
            <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" v-model="searchName" class="search-input">
            </el-input>
        </div>
        <div class="tab-lay">
            <el-menu mode="horizontal"
                     :default-active="1"
                     background-color="#00000000"
                     style="padding-left: 20px"
                     @select="handleSelect"
                     text-color="#5B7190"
                     active-text-color="#1652C4">
                <el-menu-item index="1">综合</el-menu-item>
                <el-menu-item index="2">
                    <span>性能</span>
                    <i class="el-icon-arrow-down"></i>
                </el-menu-item>
                <el-menu-item index="3">
                    <span>来源</span>
                    <i class="el-icon-arrow-down"></i>
                </el-menu-item>
                <el-menu-item index="4">
                    <span>时间</span>
                    <i class="el-icon-d-caret"></i>
                </el-menu-item>
            </el-menu>
        </div>
        <div>
            <el-row>
                <el-col :span="20">
                    <ul class="card-container">
                        <li v-for="(item,index) in modelDataArray" :key="index" class="card-lay">
                            <div class="card-lay1">
                                <model-card v-bind:model-data="item" class="card"></model-card>
                            </div>
                        </li>
                    </ul>
                    <div class="page-lay">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="1000"
                                class="page">
                        </el-pagination>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div>文档管理</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import logo from '../../assets/logo.png'
    import ModelCard from "@/components/common/ModelCard";

    export default {
        name: "DetailContent",
        data() {
            return {
                searchName: '',
                modelDataArray: [
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: logo
                    },
                ]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            ModelCard
        }
    }
</script>

<style scoped>
    .detail-bg {
        background-color: #F4F4F4;
    }

    /*搜索框的样式设置*/
    .search-lay {
        width: 100%;
        height: 80px;
        position: relative;
    }
    .search-input {
        margin: auto;
        bottom: 0;
        top: 0;
        left: 40px;
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

    /* Tab的样式设置 */
    .tab-lay .el-menu-item {
        width: 90px;
        height: 40px;
        padding: 0 10px;
        font-size: 12px;
        text-align: center;
        background-color: #F4F4F4;
    }

    .tab-lay .el-menu--horizontal .el-menu-item {
        float: left;
        height: 40px;
        line-height: 40px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
    /*网格布局样式设置*/
    .card-container{
        justify-content: space-around;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin: 20px 0 0 0;
    }
    .card-lay {
        width: 23%;
        height: 260px;
        display: inline-block;
        overflow: hidden;
    }
    .card-lay1{
        width: 90%;
        height: 90%;
    }
    .card {
        align-items: center;

        cursor: pointer;
    }
    /*分页的属性*/
    .page-lay{
        width: 100%;
        height: 60px;
    }
    .page{
        text-align: center;
        display: block;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: relative;
    }


</style>