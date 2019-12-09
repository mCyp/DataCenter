<template>
    <div class="main">
        <div class="banner">
            <h1 class="banner-title">信息汇聚 数据挖掘</h1>
            <p class="banner-desc">--推动互联网和人工智能发展的核心驱动力 </p>
        </div>
        <div class="search-lay">
            <div id="fakebox" >
                <el-input placholder="请输入内容" class="input-search"></el-input>
            </div>
            <div class="search-button">
                <i class="iconfont el_icon_dsousuofangda iiii" />
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchContent"
    }
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
    .banner-title{
        position: absolute;
        left:132px;
        top: 110px;
        overflow: hidden;
    }
    .banner-desc{
        position: absolute;
        left: 150px;
        top: 170px;
    }
    .search-lay{
        height: 100px;
        line-height: 100px;
    }
    #fakebox {
        width: 400px;
        height: 44px;
        margin: 0 auto;
        background: red;
        border-radius: 22px 0 0 22px;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
        box-sizing: content-box;
        cursor: text;
        font-size: 16px;
    }
    .search-button{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 44px;
        margin: -22px 0 0 200px;
        border-radius: 0 22px 22px 0;
        box-sizing: border-box;
        background: #0F3362;
    }
    .input-search /deep/ .el-input__inner {
        /*position: absolute;
        top: -50px;
        left: 10px;
        width: 90%;
        box-shadow: none;
        border: none;
        background-color: red;
        opacity: 0.3;
        display: block;*/

        position: absolute;
        top: 0;
        left: 10px;
        width: 90%;
        box-shadow: none;
        border: none;
        background-color: red;
        opacity: 0.3;
        display: block;
    }

    .input-btn /deep/ .el-button {
        left: 10px;
        width: 90%;
        box-shadow: none;
        border: none;
        background-color: red;
        opacity: 0.3;
        display: block;
    }

    .iiii{
        color: red;
        font-size: 20px;
        font-weight: bold;
        height: 44px;
    }

    /*.search-content:hover{
        border: 1px solid #D5E3E8;
        background: #fff;
    }
    .search-content .el-input-group__append{
        border: none;
        background-color: transparent;
    }*/
    .chart{

    }
</style>