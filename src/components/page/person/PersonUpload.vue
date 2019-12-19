<template>
    <div class="box">
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
    </div>
</template>

<script>
    import lab from "@/assets/img/lab.jpg";
    import ModelCard from "@/components/common/ModelCard";

    export default {
        name: "PersonUpload",
        data(){
            return{
                modelDataArray: [
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                    {
                        name: 'XX模型 阻力数据',
                        date: '2019.05',
                        type: '水动力性能',
                        source: 'TDM系统',
                        imgUrl: lab
                    },
                ],
            }
        },
        components:{
            ModelCard
        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: auto;
        padding: 20px 40px;
        box-sizing: border-box;
    }
    .card-container{
        justify-content: center;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin: auto;
    }
    .card-lay {
        width: 19%;
        height: 280px;
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
</style>