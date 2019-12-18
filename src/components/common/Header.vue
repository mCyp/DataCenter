<template>
    <!-- 通用的头部栏 -->
    <div class="header">
        <el-row>
            <el-col :span="11" offset="1">
                <div class="logo">
                    <img src="../../assets/img/header-logo.png" style="position:relative;height:12%;width:12%;vertical-align: middle;top: -2px">
                    <span style="padding-left: 4px">海战平台总体性能数据中心</span>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="header-tab">
                    <el-menu :default-active="activeIndex"
                             mode="horizontal"
                             @select="handleSelect"
                             class="header-menu"
                             text-color="#5B7190"
                             active-text-color="#1652C4">
                        <el-menu-item index="1">
                            <img :src="homeUrl">
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <img :src="dataUrl">
                            <span slot="title">数据群</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <img :src="dmUrl">
                            <span slot="title">数据挖掘</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <img :src="duUrl">
                            <span slot="title">数据上传</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <img :src="personUrl">
                            <span slot="title">个人信息</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>



    </div>
</template>

<script>
    import homeUrlSel from '../../assets/img/header-page-selected.png';
    import homeUrlUnSel from '../../assets/img/header-page.png';
    import dataUrlSel from '../../assets/img/header-data-selected.png';
    import dataUrlUnSel from '../../assets/img/header-data.png';
    import dmUrlSel from '../../assets/img/header-dm-selected.png';
    import dmUrlUnSel from '../../assets/img/header-dm.png';
    import duUrlSel from '../../assets/img/header-du-selected.png';
    import duUrlUnSel from '../../assets/img/header-du.png';
    import personUrlSel from '../../assets/img/header-person-selected.png';
    import personUrlUnSel from '../../assets/img/header-person.png';

    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                currentIndex: "-1",
                homeUrl: homeUrlSel,
                dataUrl: dataUrlUnSel,
                dmUrl: dmUrlUnSel,
                duUrl: duUrlUnSel,
                personUrl: personUrlUnSel,
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                //console.log(this.currentIndex+"res:"+(this.currentIndex !== -1));
                if (this.currentIndex && this.currentIndex !== -1) {
                    switch (this.currentIndex) {
                        case '1':
                            this.homeUrl = homeUrlUnSel;
                            break;
                        case '2':
                            this.dataUrl = dataUrlUnSel;
                            break;
                        case '3':
                            this.dmUrl = dmUrlUnSel;
                            break;
                        case '4':
                            this.duUrl = duUrlUnSel;
                            break;
                        case '5':
                            this.personUrl = personUrlUnSel;
                            break;
                        default:
                            this.homeUrl = homeUrlUnSel;
                    }
                }
                switch (key) {
                    case '1':
                        this.homeUrl = homeUrlSel;
                        break;
                    case '2':
                        this.dataUrl = dataUrlSel;
                        break;
                    case '3':
                        this.dmUrl = dmUrlSel;
                        break;
                    case '4':
                        this.duUrl = duUrlSel;
                        break;
                    case '5':
                        this.personUrl = personUrlSel;
                        break;
                }
                this.currentIndex = key;
                this.$emit('select-tab',key);
                console.log(key,keyPath);
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        height: 72px;
        width: 100%;
        font-size: 20px;
        color: black;
    }

    .logo {
        padding-left: 70px;
        float: left;
        width: 400px;
        line-height: 72px;
        color: #0F3362;
        font-weight: bold;
    }

    .header-tab {
        position: relative;
        right: 0;
        overflow: hidden;
    }

    .header-tab .el-menu-item {
        padding: 0 10px;
        width: 120px;
    }

    img {
        height: 36px;
        width: 36px;
        padding-right: 10px;
    }

    .header-tab span {
        font-size: 12px;
    }


</style>