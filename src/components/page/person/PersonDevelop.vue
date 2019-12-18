<template>
    <div class="box">
        <ul class="card-container">
            <li v-for="(item,index) in modelDataArray" :key="index" class="card-lay">
                <div class="card-lay1" @click="dialogVisible=!dialogVisible">
                    <el-card shadow="hover" class="card">
                        <icon-svg :icon-class="item" class="icon"></icon-svg>
                    </el-card>
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
    </div>
</template>

<script>
    import IconSvg from "@/components/common/IconSvg";

    export default {
        name: "PersonDevelop",
        data(){
            return{
                modelDataArray: [
                    'el_icon_dhuowudui1',
                    'el_icon_dzhunbeiliangchan',
                    'el_icon_dxiaolian',
                    'el_icon_dshoucang_shixin',
                    'el_icon_daixin_shixin',
                    'el_icon_ddianzan',
                    'el_icon_dchengshi',
                    'el_icon_dshexiangji',
                    'el_icon_ddaibanshixiang',
                    'el_icon_dxiaoxitongzhi',
                    'el_icon_druanjiankaifabao',
                    'el_icon_dlubiantingchechang',
                    'el_icon_dtubiao-zhexiantu',
                    'el_icon_dbianji',
                ],
            }
        },
        components:{
            IconSvg,
        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 600px;
        box-sizing: border-box;
    }
    .card-container{
        width: 60%;
        justify-content: center;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin: auto;
        padding: 60px 100px 60px 100px;
    }
    .card-lay {
        display: inline-block;
        overflow: hidden;
    }
    .card-lay1 {
        width: 120px;
        height: 120px;
    }
    .card {
        margin: 10px auto;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        width: 100px;
        height: 100px;
        padding-top: 12px;
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
    /*图标*/
    .icon {
        font-size: 36px;
        margin: auto;
        color: #1652C4;
    }
</style>