import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path:'/',
          redirect:'/upload'
        },
        {
            path: '/',
            component: ()=> import ('./components/common/Home.vue'),
            meta:{title: '自述文件'},
            children:[
                {
                    path:'/main',
                    component:()=>import('./components/page/SearchContent.vue'),
                    meta:{title:'系统首页'}
                },
                {
                    path:'/search',
                    component:()=>import('./components/page/DetailContent.vue'),
                    meta:{title:'搜索详情页'}
                },
                {
                    path:'/data',
                    component:()=>import('./components/page/DataContent.vue'),
                    meta:{title:'数据页'}
                },
                {
                    path:'/upload',
                    component:()=>import('./components/page/upload/DataUpload.vue'),
                    meta:{title:'上传页'},
                    children:[
                        {
                            path:'start',
                            component:()=>import('./components/page/upload/BaseUpload.vue'),
                            meta:{title:'开始上传'}
                        },
                        {
                            path:'configure',
                            component:()=>import('./components/page/upload/Configuration.vue'),
                            meta:{title:'配置信息'}
                        },
                        {
                            path:'success',
                            component:()=>import('./components/page/upload/UploadSuccess.vue'),
                            meta:{title:'配置成功'}
                        }
                    ]
                },
                {
                    path:'/person',
                    component:()=>import('./components/page/person/PersonContent.vue'),
                    meta:{title:'个人信息'},
                    children:[
                        {
                            path:'info',
                            component:()=>import('./components/page/person/PersonInfo.vue'),
                            meta:{title:'个人信息'}
                        },
                        {
                            path:'upload',
                            component:()=>import('./components/page/person/PersonUpload.vue'),
                            meta:{title:'我的上传数据'}
                        },
                        {
                            path:'app',
                            component:()=>import('./components/page/person/PersonDevelop.vue'),
                            meta:{title:'我的App'}
                        },
                    ]
                },
            ]
        },
        {
            path: '/login',
            component:()=>import('./components/page/Login.vue'),
            mata: {title: '登录'}
        }
    ]
})