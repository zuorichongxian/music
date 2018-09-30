import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  base: '/music/', //加上这一行
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () =>
        import ('@/views/recommend/recommend.vue'),
      children: [{
        path: ':id',
        name: 'playlist-detail',
        component: () =>
          import ('@/views/playlist-detail/playlist-detail.vue'),
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: () =>
        import ('@/views/rank/rank.vue'),
    },
    {
      path: '/singer',
      name: 'singer',
      component: () =>
        import ('@/views/singer/singer.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import ('@/views/search/search.vue'),
    },
  ]
})
