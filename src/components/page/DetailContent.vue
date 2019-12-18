<template>
    <div class="detail-bg">
        <div class="search-lay">
            <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" v-model="searchName" class="search-input">
            </el-input>
        </div>
        <div>
            <el-row>
                <el-col :span="20">
                    <div class="tab-lay">
                        <el-menu mode="horizontal"
                                 :default-active="1"
                                 background-color="#00000000"
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
                    <ul class="card-container">
                        <li v-for="(item,index) in modelDataArray" :key="index" class="card-lay">
                            <div class="card-lay1" @click="dialogVisible=!dialogVisible">
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
                    <el-dialog title="数据查看"
                               :visible.sync="dialogVisible"
                               width="70%">
                        <el-row>
                            <el-col :span="12" class="left-col">
                                <h4 class="title">实验数据</h4>
                                <el-row>
                                    <el-col :span="12">
                                        <span class="out-text">日期：<span
                                                class="inner-text">{{dataObj.date}}</span></span>
                                        <span class="out-text">性能：<span
                                                class="inner-text">{{dataObj.performance}}</span></span>
                                        <span class="out-text">速度：<span class="inner-text">{{dataObj.v}}/s</span></span>
                                        <span class="out-text">吃水：<span class="inner-text">{{dataObj.waterLine}}m</span></span>
                                    </el-col>
                                    <el-col :span="12">
                                        <span class="out-text">数据来源：<span
                                                class="inner-text">{{dataObj.source}}</span></span>
                                        <span class="out-text">类型：<span
                                                class="inner-text">{{dataObj.type}}</span></span>
                                    </el-col>
                                </el-row>

                                <h4 class="title">实验数据表</h4>
                                <div>
                                    <el-table
                                            :data="tableDataArray"
                                    >
                                        <el-table-column
                                                prop="T"
                                                label="T">
                                            <template slot="header">
                                                <span class="table-header">T</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C1"
                                                label="C1">
                                            <template slot="header">
                                                <span class="table-header">C1</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C2"
                                                label="C2">
                                            <template slot="header">
                                                <span class="table-header">C2</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C3"
                                                label="C3">
                                            <template slot="header">
                                                <span class="table-header">C3</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C4"
                                                label="C4">
                                            <template slot="header">
                                                <span class="table-header">C4</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C5"
                                                label="C5">
                                            <template slot="header">
                                                <span class="table-header">C5</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="C6"
                                                label="C6">
                                            <template slot="header">
                                                <span class="table-header">C6</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-col>
                            <el-col :span="12" class="right-col">
                                <h4 class="title">实验数据图</h4>
                                <chart-content></chart-content>
                            </el-col>
                        </el-row>
                    </el-dialog>

                </el-col>
                <el-col :span="4">
                    <ul class="icon-container">
                        <li v-for="(doc,index) in docDataArray" :key="index" class="icon-lay">
                            <div v-on:click="download(doc.url)">
                                <icon-svg :icon-class="handleDocType(doc.type)" class="icon"></icon-svg>
                                <span class="icon-font">{{doc.name}}</span>
                            </div>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import logo from '../../assets/logo.png'
    import ModelCard from "@/components/common/ModelCard";
    import IconSvg from "@/components/common/IconSvg";
    import ChartContent from "@/components/common/ChartContent";

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
                ],
                docDataArray: [
                    {
                        name: 'xxx模型阻力实验大纲',
                        url: '...',
                        type: 'doc'
                    },
                    {
                        name: 'xxx模型耐波性大纲',
                        url: '...',
                        type: 'doc'
                    },
                    {
                        name: 'xxx模型阻力实验报告',
                        url: '...',
                        type: 'pdf'
                    },
                    {
                        name: '阻力实验图谱',
                        url: '...',
                        type: 'png'
                    },
                    {
                        name: '阻力实验介绍文档',
                        url: '...',
                        type: 'ppt'
                    },
                    {
                        name: '阻力实验资料',
                        url: '...',
                        type: 'zip'
                    },
                    {
                        name: 'xxx模型耐波性大纲',
                        url: '...',
                        type: 'doc'
                    },
                    {
                        name: 'xxx模型耐波性大纲',
                        url: '...',
                        type: 'doc'
                    },
                ],
                dialogVisible: false,
                dataObj: {
                    date: '2019-05-02',
                    source: 'TDM系统',
                    performance: '水动力性能',
                    type: '阻力实验',
                    v: 3,
                    waterLine: 5
                },
                tableDataArray: [
                    {T: 0.3, C1: 0.6, C2: 0.8, C3: 0.7, C4: 0.6, C5: 0.6, C6: 0.7},
                    {T: 0.3, C1: 0.6, C2: 0.8, C3: 0.7, C4: 0.6, C5: 0.6, C6: 0.7},
                    {T: 0.3, C1: 0.6, C2: 0.8, C3: 0.7, C4: 0.6, C5: 0.6, C6: 0.7},
                    {T: 0.3, C1: 0.6, C2: 0.8, C3: 0.7, C4: 0.6, C5: 0.6, C6: 0.7},
                    {T: 0.3, C1: 0.6, C2: 0.8, C3: 0.7, C4: 0.6, C5: 0.6, C6: 0.7}
                ],
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleDocType(type) {
                switch (type) {
                    case 'doc':
                        return 'el_icon_dWORD';
                    case 'pdf':
                        return 'el_icon_dPDF';
                    case 'jpg':
                    case 'png':
                    case 'gif':
                        return 'el_icon_dtupianziliao';
                    case 'xls':
                        return 'el_icon_dECEL';
                    case 'zip':
                        return 'el_icon_dZIP';
                    case 'ppt':
                        return 'el_icon_dPPT';
                    default:
                        return 'el_icon_dzonghewendang';
                }
            },
            download(url) {
                this.$message.info("即将下载：" + url)
            }
        },
        components: {
            ModelCard,
            IconSvg,
            ChartContent
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

    .tab-lay {
        margin-left: 40px;
        margin-right: 40px;
    }

    /* Tab的样式设置 */
    .tab-lay .el-menu-item {
        width: 90px;
        height: 40px;
        padding-right: 10px;
        padding-left: 0;
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
    .card-container {
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

    .card-lay1 {
        width: 90%;
        height: 90%;
    }

    .card {
        align-items: center;
        cursor: pointer;
    }

    /*分页的属性*/
    .page-lay {
        width: 100%;
        height: 60px;
    }

    .page {
        text-align: center;
        display: block;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: relative;
    }

    /*文档管理*/
    .icon-container {
        justify-content: space-around;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin: 60px 0;
        padding-left: 0;
        padding-bottom: 60px;
    }

    .icon-lay {
        display: inline-block;
        padding: 10px;
        width: 35%;
        height: 120px;
        overflow: hidden;
    }

    .icon {
        width: 60px;
        height: 60px;
        display: block;
        margin: auto;
    }

    .icon-font {
        padding: 5px;
        font-size: 8px;
        color: black;
    }

    /*弹出框*/
    .title {
        margin: 6px 0;
    }
    .out-text {
        display: block;
        margin: 5px 0;
    }
    .inner-text {
        color: #0F3362;
    }
    .table-header{
        color: #3A69C9;
    }
    .left-col{
        padding-right: 40px;
    }
    .right-col{
        border-left: 1px solid #909399;
        padding-left: 40px;
    }


</style>