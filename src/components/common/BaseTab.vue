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
        props:['tabArray'],
        methods: {
            handleTabClick: function (index) {
                let len = this.tabArray.length;
                let i = 0;
                for (; i < len; i++) {
                    this.tabArray[i].selected = i === index;
                }
                console.log("current:"+index+typeof index);
                this.$emit('tab-selected',index);
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