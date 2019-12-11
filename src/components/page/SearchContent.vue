<template>
    <div class="main">
        <div class="banner">
            <h1 class="banner-title">信息汇聚 数据挖掘</h1>
            <p class="banner-desc">--推动互联网和人工智能发展的核心驱动力 </p>
        </div>
        <div class="search-lay">
            <div class="search-lay1">
                <div id="fakebox" >
                    <el-input placholder="请输入内容" class="input-search" v-model="searchContent" ></el-input>
                </div>
                <div class="search-button" v-on:click="searchSubmit(searchContent)">
                    <i class="iconfont el_icon_dsousuo icon" />
                </div>
            </div>
        </div>

        <div class="footer-chart">
           <el-row>
                <el-col :span="12" align="right" style="padding-right: 10px">
                    <!-- 信息 -->
                    <el-tabs :tab-position="newsPosition" style="width: 510px" align="center">
                        <el-tab-pane label="最新">
                            <list-card :news="news"></list-card>
                        </el-tab-pane>
                        <el-tab-pane label="推荐">
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span="12" style="padding-left: 10px">
                    <el-tabs :tab-position="newsPosition"  align="center" style="width: 510px;height: 400px;padding-left: 10px">
                        <el-tab-pane label="数据量" lazy="true">
                            <ChartCard></ChartCard>
                        </el-tab-pane>
                        <el-tab-pane label="来源">
                            来源
                        </el-tab-pane>
                    </el-tabs>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ListCard from "@/components/common/ListCard";
    import ChartCard from "@/components/common/ChartCard";

    export default {
        name: "SearchContent",
        components: {ChartCard,ListCard},
        data(){
            return{
                searchContent:"",
                news:[
                    {name:'模型阻力数据',type:'TDM',date:'2019-8-12'},
                    {name:'模型操作性能数据',type: 'TDM',date:'2019-8-12'},
                    {name:'模型耐波性数据',type: 'TDM',date:'2019-8-12'},
                    {name:'模型操作性能数据',type: 'TDM',date:'2019-8-12'},
                    {name:'模型耐波性数据',type: 'TDM',date:'2019-8-12'}
                ],
                news1:[
                    {name:'数据一',type:'TDM',date:'2019-8-12'},
                    {name:'数据二',type: 'TDM',date:'2019-8-12'},
                    {name:'数据三',type: 'TDM',date:'2019-8-12'},
                    {name:'数据四',type: 'TDM',date:'2019-8-12'},
                    {name:'数据五',type: 'TDM',date:'2019-8-12'}
                ]
            }
        },
        methods:{
            searchSubmit(str){
                this.$message.info("搜索内容为"+str)
            }
        },
    }
    // 动态tab

    console.log(111)
</script>

<style scoped>
    .banner {
        background-image: url("../../assets/img/search-banner.png");
        height: 240px;
        color: white;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        box-sizing: border-box;
    }
    .banner-title {
        position: absolute;
        left: 132px;
        top: 130px;
        overflow: hidden;
    }
    .banner-desc {
        position: absolute;
        left: 150px;
        top: 190px;
    }
    .search-lay {
        background-color: #F4F4F4;
        height: 100px;
        position: relative;
    }
    .search-lay1 {
        margin: auto;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        width: 500px;
        height: 44px;
        line-height: 44px;
    }
    #fakebox {
        width: 400px;
        height: 44px;
        background-color: white;
        border-radius: 22px 0 0 22px;
        box-shadow: 0 1px 4px 0 rgba(32, 33, 36, .28);
        box-sizing: content-box;
        cursor: text;
        font-size: 16px;
    }
    .search-button {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 44px;
        margin: -22px 0 0 150px;
        border-radius: 0 22px 22px 0;
        box-sizing: border-box;
        background: #1652C4;
    }
    .input-search /deep/ .el-input__inner {
        height: 36px;
        width: 90%;
        margin-left: 10px;
        box-shadow: none;
        border: none;
        background-color: transparent;
        display: block;
    }
    .icon {
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: auto auto auto -10px;
        left: 45%;
        position: absolute;
    }
    .footer-chart{
        background-color: #F4F4F4;
    }

   /* .tab-style /deep/ .el-tabs__item.is-active {
        color: #409EFF;
        border-bottom: 3px solid #888;
    }*/


</style>
