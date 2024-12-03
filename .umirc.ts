import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  mock: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' CRUD 示例1',
      path: '/table1',
      component: './Table',
    },
    {
      name: ' CRUD 示例2',
      path: '/table2',
      component: './Table',
    },
    {
      name: ' CRUD 示例3',
      path: '/table3',
      component: './Table',
    },
    {
      name: ' New Page',
      path: '/newpage',
      component: './NewPage/newpage',
      routes: [
        {},
        {
          name: 'SubPage1',
          path: '/newpage/subpage1',
          component: './NewPage/SubPage1/subpage1',
        },
        {
          name: 'SubPage2',
          path: '/newpage/subpage2',
          component: './NewPage/SubPage2/subpage2',
        },
      ],
    },

    // login
    {
      name: ' Login',
      path: '/Login',
      component: './Login/index',
    },
    {
      name: ' dashboard',
      path: '/Dashboard',
      component: './Dashboard/index',
    },
    {
      name: ' /',
      path: '/',
      redirect: '/dashboard', // 默认跳转到dashboard
    },
  ],
  npmClient: 'pnpm',
  proxy: [
    {
      context: ['/api'],
      target: 'http://localhost:8000',
      pathRewrite: { '^/api': '' },
    },
  ],
});
