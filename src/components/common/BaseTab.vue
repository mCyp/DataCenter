<template>
    <div class="outer-bg">
        <el-row class="tab-lay">
            <el-col :span="4" :offset="(index==0?4:0)" class="col-container" v-for="(tab,index) in tabArray"
                    :key="index">
                <div class="col-container-inner"  v-on:click="handleTabClick(index)">
                    <div>
                        <el-card class="card-lay" :style="{background:tab.color,
                         border:tab.selected?'4px solid white':'none',
                         boxShadow:tab.selected?' 0 2px 12px 0 rgba(0, 0, 0, 0.2)':'none'
                        }" shadow="hover">
                            <IconSvg :icon-class="tab.iconName" class="icon"></IconSvg>
                        </el-card>
                    </div>
                    <h6 class="text">{{tab.title}}</h6>
                    <div v-if="tab.selected" class="border-bottom"></div>
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
                        selected: true,
                        color: '#06BBFB',
                        iconName: 'el_icon_dxiaolian',
                        index: 1
                    },
                    {
                        title: '结构与强度新能',
                        selected: false,
                        color: '#9AB9F9',
                        iconName: 'el_icon_dshenjing',
                        index: 2
                    },
                    {
                        title: '综合隐身',
                        selected: false,
                        color: '#A9D3AB',
                        iconName: 'el_icon_dmiwen',
                        index: 3
                    },
                    {
                        title: '环境数据',
                        selected: false,
                        color: '#92D9DB',
                        iconName: 'el_icon_dguize',
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

    /*.card-lay:hover {
        width: 76px;
        height: 76px;
        background-color: dodgerblue;
        border-radius: 64px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    }*/

    .icon {
        font-size: 36px;
        margin: auto;
        color: white;
    }

    .text {
        width: 100%;
        text-align: center;
        display: block;
        margin: 10px 0 5px 0;
    }

    .border-bottom {
        height: 4px;
        width: 40px;
        margin: auto;
        background-color: dodgerblue;
    }

</style>