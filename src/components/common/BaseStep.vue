<template>
    <div class="outer-bg">
        <el-row class="tab-lay">
            <el-col :span="2" :offset="(index==0?5:0)" v-for="(tab,index) in tabArray" :key="index"
                    class="col-container">
                <div class="col-container-inner" v-on:click="handleTabClick(index)" v-if="index % 2 == 0">
                    <div>
                        <el-card :class="getClassObj(index)" shadow="hover">
                            <IconSvg :icon-class="tab.iconName" class="icon"></IconSvg>
                        </el-card>
                    </div>
                    <h6 class="text" :style="{color:(tabPos !== index?'#A6B2C1':'#404040')}">{{tab.title}}</h6>
                </div>
                <div v-else class="icon-lay">
                    <i class="el-icon-caret-right icon" :class="getIconClassObj(index)"></i>
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
        props:{
            tabPos: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                tabArray: [
                    {
                        title: '上传',
                        iconName: 'el_icon_dyunduanshangchuan',
                        index: 1
                    },
                    {
                        title: 'xian',
                    },
                    {
                        title: '解析',
                        iconName: 'el_icon_dshujukanban',
                        index: 2
                    },
                    {
                        title: 'xian',
                    },
                    {
                        title: '配置',
                        iconName: 'el_icon_dgongnengdingyi',
                        index: 3
                    },
                    {
                        title: 'xian',
                    },
                    {
                        title: '完成',
                        iconName: 'el_icon_dduigou_kuai',
                        index: 4
                    },
                ]
            }
        },
        methods: {
            handleTabClick: function (index) {
                console.log(index);
            },
            getClassObj: function (index) {
                if (index < 2 * this.tabPos) {
                    return 'card-lay-success';
                } else if (index === 2 * this.tabPos) {
                    return 'card-lay-on';
                } else
                    return 'card-lay-wait';
            },
            getIconClassObj: function (index) {
                if (index < 2 * this.tabPos) {
                    return 'indicator-icon-success';
                } else if (index === 2 * this.tabPos+1 && 2 * this.tabPos !== 8) {
                    return 'indicator-icon-on';
                } else
                    return 'indicator-icon-wait';
            }
        },
        computed: {}
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

    .card-lay-success {
        margin: auto;
        width: 76px;
        height: 76px;
        border-radius: 76px;
        background-color: #00CCA7;
    }

    .card-lay-on {
        margin: auto;
        width: 76px;
        height: 76px;
        border-radius: 76px;
        background-color: #1652C4;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    }

    .card-lay-wait {
        margin: auto;
        width: 76px;
        height: 76px;
        border-radius: 76px;
        background-color: #F5FAFE;
    }

    .icon {
        font-size: 36px;
        margin: auto;
        color: white;
    }

    .card-lay-wait .icon {
        font-size: 36px;
        margin: auto;
        color: #DEE1E6;
    }

    .icon-lay {
        margin: auto;
    }

    .indicator-icon-success {
        color: #00CCA7;
    }

    .indicator-icon-on {
        color: #1652C4;
    }

    .indicator-icon-wait {
        color: #F5FAFE;
    }

    .text {
        width: 100%;
        text-align: center;
        display: block;
        margin: 10px 0 5px 0;
    }

</style>