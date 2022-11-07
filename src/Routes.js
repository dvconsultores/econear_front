import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/services/goto'

Vue.use(Router);

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
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
          path: '/profile',
          name: 'profile',
          component: () => import('@/pages/profile/Profile'),
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
        {
          path: '/new-projects',
          name: 'newProjects',
          component: () => import('@/pages/newProjects/NewProjects'),
        },
        {
          path: '/coming-soon',
          name: 'comingSoon',
          component: () => import('@/pages/home/comingSoon/Hero'),
        },
        {
          path: '/project-details/:id?',
          name: 'projectDetails',
          component: () => import('@/pages/projectDetails/ProjectDetails'),
        },
        {
          path: '/project-details2/:id?',
          name: 'projectDetails2',
          component: () => import('@/pages/projectDetails/ProjectDetails2'),
        },
        {
          path: '/view-collections/:id?',
          name: 'viewCollections',
          component: () => import('@/pages/viewCollections/ViewCollections'),
        },
        {
          path: '/marketplace-stats',
          name: 'marketplaceStats',
          component: () => import('@/pages/marketplaceStats/MarketplaceStats'),
        },
        {
          path: '/marketplace-stats2',
          name: 'marketplaceStats',
          component: () => import('@/pages/marketplaceStats/MarketplaceStats2'),
        },
        {
          path: '/bulk-nft-management',
          name: 'bulkNftManagement',
          component: () => import('@/pages/bulkNftManagement/BulkNftManagement'),
        },
        {
          path: '/active-wallets-stats',
          name: 'activeWalletsStats',
          component: () => import('@/pages/activeWalletsStats/ActiveWalletsStats'),
        },
        {
          path: '/wallet-details:id?',
          name: 'walletDetails',
          component: () => import('@/pages/walletDetails/WalletDetails'),
        },
        {
          path: '/vote',
          name: 'vote',
          component: () => import('@/pages/vote/Vote'),
        },
        {
          path: '/whitelist',
          name: 'whitelist',
          component: () => import('@/pages/whitelist/Whitelist'),
        },
        {
          path: '/whitelist-details:id?',
          name: 'whitelistDetails',
          component: () => import('@/pages/whitelistDetails/WhitelistDetails'),
        },
        {
          path: '/mint-calendar',
          name: 'mintCalendar',
          component: () => import('@/pages/mintCalendar/MintCalendar'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/pages/contact/Contact'),
        },
        {
          path: '/restricted',
          name: 'restringed',
          component: () => import('@/pages/restringed/Restringed'),
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
