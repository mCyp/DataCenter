<template>
    <div>
        <BaseStep :tab-pos="tabPos"></BaseStep>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="bottom">
            <el-button type="info" class="button" v-on:click="lastStep">上一步</el-button>
            <el-button type="primary" class="button" v-on:click="nextStep">下一步</el-button>

        </div>
    </div>
</template>

<script>
    import BaseStep from "@/components/common/BaseStep";

    export default {
        name: "DataUpload",
        data() {
            return {
                tabPos: 0,
            }
        },
        components: {
            BaseStep
        },
        mounted() {
            this.$router.push('/upload/start');
            this.tabPos = 0;
        },
        methods: {
            lastStep: function () {
                if (this.tabPos === 0)
                    return;
                this.tabPos = this.tabPos - 1;
                if (this.tabPos !== 1)
                    this.$router.back();
            },
            nextStep: function () {
                if (this.tabPos === 3)
                    return;
                this.tabPos = this.tabPos + 1;
                if (this.tabPos === 2) {
                    this.$router.push('/upload/configure');
                } else if (this.tabPos === 3) {
                    this.$router.push('/upload/success');
                }
            }
        }
    }
</script>

<style scoped>
    .step-container {
        padding-top: 40px;
        position: relative;
        height: 100px;
        width: 100%;
        box-sizing: content-box;
        background: #eeeeee;
    }

    .step-lay {
        height: 60px;
        width: 100%;
    }

    .content {
        width: 100%;
        height: 400px;
        position: relative;
    }

    .bottom {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }

    .button {
        padding-left: 40px;
        margin: 0 20px;
        padding-right: 40px;
    }

</style>