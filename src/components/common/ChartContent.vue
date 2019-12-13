<template>
    <el-card class="chart-style" shadow="never">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-card>
</template>

<script>
    export default {
        name: "ChartContent",
        data(){
            return{
                chartSettings:{
                    normal:{show:true},
                    area:true,
                },
                chartData:{
                    columns:['月份','资源内存'],
                    rows:[
                        {'月份':'1','资源内存':9.4},
                        {'月份':'2','资源内存':7.1},
                        {'月份':'3','资源内存':5.0},
                        {'月份':'4','资源内存':6.4},
                        {'月份':'5','资源内存':5.2},
                        {'月份':'6','资源内存':4.0},
                        {'月份':'7','资源内存':14.4},
                        {'月份':'8','资源内存':16.1},
                        {'月份':'9','资源内存':18.0},
                    ]
                }
                /*chartSettings:{
                    stack: { '用户': ['访问用户', '下单用户'] },
                    area: true
                },*/
               /* chartData: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                }*/
            }
        }
    }
</script>

<style scoped>
    .chart-style{
        width: 100%;
        height: 100%;
        margin: auto;
        border: none;
    }
</style>