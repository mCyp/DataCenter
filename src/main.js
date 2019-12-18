import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VeLine from 'v-charts/lib/line.common'
import './assets/css/element.scss'
import './assets/css/icon.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'

Vue.component(VeLine.name,VeLine);
Vue.use(ElementUI,{
  size:'small'
});

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title} | vue-manage-system`;
  const role = localStorage.getItem('ms-username');
  console.log("role："+role);
  if(!role && to.path !== '/login'){
    next('/login');
  }else if(to.meta.permission){
    role === 'admin'?next():next('/403');
  }else {
    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
      Vue.prototype.$alert("您的浏览器太旧了，请使用IE9及以上版本或者谷歌浏览器！","浏览器通知",{
        confirmButtonText:'确定'
      });
    }else {
      next();
    }
  }
});

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app');
