// import React from 'react'
// import { history } from 'umi';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  avatar: string;
}> {
  return {
    //name: '@umijs/max'

    name: 'Serati Ma',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}

// 配置登录页面 /Login 路由

// export const onRouteChange = ({ location, routes }) => {
//   const token = localStorage.getItem('token');
//   const { pathname } = location;

//   // 如果未登录并且不是登录页，则跳转到登录页
//   if (!token && pathname !== '/login') {
//     history.push('/login');
//   }
// };

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },

    logout: () => {
      alert('退出登录成功');
    },

    footerRender: () => {},
  };
};
