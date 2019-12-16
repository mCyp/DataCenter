<template>
    <div>
        <base-tab></base-tab>
        <div class="from-lay">
           <el-form ref="form" :model="form" label-width="80px">
               <el-form-item label="基础">
                   <el-select v-model="form.baseName" placeholder="请选择">
                       <el-option v-for="item in baseNameArray" :key="item" :label="item" :value="item"></el-option>
                   </el-select>
                   <el-select v-model="form.ship" placeholder="船模/实船" style="margin-left: 20px">
                       <el-option v-for="item in shipArray" :key="item" :label="item" :value="item"></el-option>
                   </el-select>
               </el-form-item>
               <el-form-item label="标签">
                   <el-checkbox-group v-model="form.tag">
                       <el-checkbox v-for="(item,index) in tagArray" :key="index" :label="item"></el-checkbox>
                   </el-checkbox-group>
               </el-form-item>
               <el-form-item label="分类">
                   <el-radio-group v-model="form.type">
                       <el-radio v-for="(item,index) in typeArray" :key="index" :label="item"></el-radio>
                   </el-radio-group>
               </el-form-item>
           </el-form>

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
    </div>
</template>

<script>
    import BaseTab from "@/components/common/BaseTab";
    import logo from "@/assets/logo.png";
    import ModelCard from "@/components/common/ModelCard";
    export default {
        name: "DataContent",
        data(){
            return{
                baseNameArray:['水面','水下','空中'],
                shipArray:['远望一号','蛟龙号','深海勇士'],
                tagArray:['全部','快速性','耐波性','操纵性','稳性','自航','...'],
                typeArray:['全部','物理实验','虚拟实验'],
                form:{
                    baseName:'',
                    ship:'',
                    tag:'',
                    type:''
                },
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
                    }
                ],
            }
        },
        components:{
            BaseTab,
            ModelCard
        }
    }
</script>

<style scoped>
    .from-lay{
        padding: 10px 0 10px 40px;
    }
    .card-container {
        margin-right: 40px;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .card-lay {
        width: 17%;
        height: 260px;
        display: inline-block;
        overflow: hidden;
    }
    .card {
        align-items: center;
        margin: 5px 10px;
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