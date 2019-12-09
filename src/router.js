import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path:'/',
          redirect:'/main'
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
                }
            ]
        },
        {
            path: '/login',
            component:()=>import('./components/page/Login.vue'),
            mata: {title: '登录'}
        }
    ]
})