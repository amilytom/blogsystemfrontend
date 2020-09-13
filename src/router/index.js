import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/index.vue'),
      meta: {title: '网站首页'}
    },
    {
      path: '/cate/:id',
      name: 'Cate',
      component: () => import('../views/cate.vue'),
      meta: {title: '网站首页'}
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/about.vue'),
      meta: {title: '网站首页'}
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: () => import('../views/article.vue'),
      meta: {title: '网站首页'}
    },
    {
      path: '/404',
      name: 'Error',
      component: () => import('../views/error.vue'),
      meta: {title: '网站首页'}
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
