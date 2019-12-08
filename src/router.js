import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Login from './components/page/Login.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            mata: {title: '登录'}
        },
        {
            path: '/foo',
            name: 'foo',
            component: Foo
        },
        {
            path: '/bar',
            name: 'bar',
            component: Bar
        }
    ]
})