<template>
    <div class="wrapper">
        <v-header></v-header>
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
        data(){
            return{
                tagsList:[]
            }
        },
        components:{
            vHeader
        }
    }
</script>

<style scoped>

</style>