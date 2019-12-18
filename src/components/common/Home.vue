<template>
    <div class="wrapper">
        <v-header v-on:select-tab="onTabSelected"></v-header>
        <div class="content-box">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <el-backtop target=".content"></el-backtop>
        </div>
    </div>
</template>

<script>
    import vHeader from './Header.vue'

    export default {
        name: "Home",
        data() {
            return {
                currentKey: '-1',
                tagsList: []
            }
        },
        components: {
            vHeader
        },
        methods: {
            onTabSelected: function (key) {
                if (this.currentKey && this.currentKey === key) {
                    return;
                }
                switch (key) {
                    case '1':
                        this.$router.push('/main');
                        break;
                    case '2':
                        this.$router.push('/data');
                        break;
                    case '3':
                        break;
                    case '4':
                        this.$router.push('/upload');
                        break;
                    default:
                        this.$router.push('/person');
                        break;
                }
                this.currentKey = key;
            }
        },
        mounted(){
            this.$router.push('/main')
        }
    }
</script>

<style scoped>

</style>