<template>
    <div>
        <base-tab :tab-array="tabArray" v-on:tab-selected="onPersonTabSelected"></base-tab>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import BaseTab from "@/components/common/BaseTab";
    export default {
        name: "PersonContent",
        components: {BaseTab},
        data(){
            return{
                currentIndex:'-1',
                tabArray: [
                    {
                        title: '个人信息',
                        selected: true,
                        color: '#2CC0C2',
                        iconName: 'el_icon_dxiaolian',
                        index: 1
                    },
                    {
                        title: '我上传的数据',
                        selected: false,
                        color: '#F9DFA4',
                        iconName: 'el_icon_dshenjing',
                        index: 2
                    },
                    {
                        title: '我开发的app',
                        selected: false,
                        color: '#CDADF6',
                        iconName: 'el_icon_dyunyingguanli',
                        index: 3
                    },
                    {
                        title: '我使用的app',
                        selected: false,
                        color: '#99B8F9',
                        iconName: 'el_icon_dyingyongguanli',
                        index: 4
                    },
                ]
            }
        },
        mounted() {
            this.$router.push('/person/info');
        },
        methods:{
            onPersonTabSelected(index){
                if(this.currentIndex === index){
                    return;
                }
                console.log("re:"+index);

                switch (index) {
                    case 0:
                        this.$router.push('/person/info');
                        break;
                    case 1:
                        this.$router.push('/person/upload');
                        break;
                    default:
                        this.$router.push('/person/app');
                        break;
                }
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>

</style>