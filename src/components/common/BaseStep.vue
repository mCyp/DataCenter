<template>
    <div class="outer-bg">
        <el-row class="tab-lay">
            <el-col :span="2" :offset="(index==0?5:0)" v-for="(tab,index) in tabArray" :key="index"
                    class="col-container">
                <div class="col-container-inner" v-on:click="handleTabClick(index)" v-if="index % 2 == 0">
                    <div>
                        <el-card class="card-lay" :style="{background:tab.color,
                         border:tab.selected?'4px solid white':'none',
                         boxShadow:tab.selected?' 0 2px 12px 0 rgba(0, 0, 0, 0.2)':'none'
                        }" shadow="hover">
                            <IconSvg :icon-class="tab.iconName" class="icon"></IconSvg>
                        </el-card>
                    </div>
                    <h6 class="text">{{tab.title}}</h6>
                </div>
                <div v-else class="icon-lay">
                    <i class="el-icon-caret-right icon"></i>
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    import IconSvg from "@/components/common/IconSvg";

    export default {
        name: "BaseTab",
        components: {IconSvg},
        data() {
            return {
                tabArray: [
                    {
                        title: '水动力性能',
                        status: '1',
                        color: '#00CCA7',
                        iconName: 'el_icon_dyunduanshangchuan',
                        index: 1
                    },
                    {
                        title: 'xian',
                        status: '1',
                    },
                    {
                        title: '结构与强度新能',
                        status: '1',
                        color: '#00CCA7',
                        iconName: 'el_icon_dshujukanban',
                        index: 2
                    },
                    {
                        title: 'xian',
                        status: '1',
                    },
                    {
                        title: '综合隐身',
                        status: '1',
                        color: '#00CCA7',
                        iconName: 'el_icon_dgongnengdingyi',
                        index: 3
                    },
                    {
                        title: 'xian',
                        status: '1',
                    },
                    {
                        title: '环境数据',
                        status: '1',
                        color: '#F5FAFE',
                        iconName: 'el_icon_dduigou_kuai',
                        index: 4
                    },
                ]
            }
        },
        methods: {
            handleTabClick: function (index) {
                let len = this.tabArray.length;
                let i = 0;
                for (; i < len; i++) {
                    this.tabArray[i].selected = i === index;
                }
            },

        },
        computed() {
            return {
                handleColor: function (status) {
                    switch (status) {
                        case '1':
                            return '#00CCA7';
                        case '2':
                            return '#F5FAFE';
                        default:
                            return '#E91E63'
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .outer-bg {
        background-color: #eeeeee;
    }

    .tab-lay {
        width: 100%;
        height: 200px;
    }

    .col-container {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .col-container-inner {
        margin: auto;
    }

    .card-lay {
        margin: auto;
        width: 76px;
        height: 76px;
        border: 4px solid transparent;
        border-radius: 80px;
        background-color: dodgerblue;
    }

    .icon {
        font-size: 36px;
        margin: auto;
        color: white;
    }

    .icon-lay {
        margin: auto;
    }

    .text {
        width: 100%;
        text-align: center;
        display: block;
        margin: 10px 0 5px 0;
    }

</style>