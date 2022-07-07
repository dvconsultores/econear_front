import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/services/goto'

Vue.use(Router);

export default new Router({
  /*
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },*/
  routes: [
    // path 1
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layouts/login/Login'),
    },
    // path 2
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layouts/layout/Layout'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home/Home'),
        },
        {
          path: '/portafolio',
          name: 'portafolio',
          component: () => import('@/pages/portafolio/Portafolio'),
        },
        {
          path: '/snipe-tool',
          name: 'snipeTool',
          component: () => import('@/pages/snipeTool/SnipeTool'),
        },
        {
          path: '/compare-projects',
          name: 'compareProjects',
          component: () => import('@/pages/compareProjects/CompareProjects'),
        },
        {
          path: '/upcoming-nft-drops',
          name: 'upcomingNftDrops',
          component: () => import('@/pages/upcomingNftDrops/UpcomingNftDrops'),
        },
      ],
    },
    // path 3
    {
      path: '*',
      name: 'error',
      component: () => import('@/layouts/error/Error'),
    }
  ],
});
