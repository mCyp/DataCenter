<template>
    <el-card shadow="hover" style="width: 500px;height: 250px">
        <ve-line :data="chartData" :settings="chartSettings" width="500px" height="250px"></ve-line>
    </el-card>
</template>

<script>
    export default {
        name: "ChartCard",
        data(){
            return{
                chartSettings:{
                    normal:{show:true},
                    area:true,
                },
                chartData:{
                    columns:['部门','资源内存'],
                    rows:[
                        {'部门':'水动力','资源内存':9.4},
                        {'部门':'结构','资源内存':7.1},
                        {'部门':'综合隐身','资源内存':5.0},
                        {'部门':'海洋环境','资源内存':6.4},
                        {'部门':'实船','资源内存':5.2},
                        {'部门':'虚拟实验','资源内存':4.0},
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

</style>