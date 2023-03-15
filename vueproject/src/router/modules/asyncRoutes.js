import routerView from '@/components/routerView.vue'

// 异步路由 不同用户不同路由,根据权限来定的
const asyncRoutes = [
   {
    name: 'Files',
    path: '/files',
    component: routerView,
    redirect: '/files/vue',
    meta: {
      title: '文档',
      icon: 'el-icon-lock',
      permission: true,
      roles:['all']
    },
    children: [
      {
        name: 'Vue',
        path: '/files/vue',
        component: () => import('@/views/files/vuefile'),
        meta: {
          title: 'Vue文档',
          roles:['all']
        },
      },
      {
        name: 'Node',
        path: '/files/node',
        component: () => import('@/views/files/nodefile'),
        meta: {
          title: 'Node文档',
          roles:['all']
        },
      },
      {
        name: 'Webpack',
        path: '/files/webpack',
        component: () => import('@/views/files/webpackfile'),
        meta: {
          title: 'Webpack文档',
          roles:['all']
        }
      }]
  },{
    name: 'Assembly',
    path: '/assembly',
    component: routerView,
    redirect: '/assembly/button',
    meta: {
      title: '组件',
      icon: 'el-icon-lock',
      permission: true,
      roles:['all']
    },
    children: [
      {
        name: 'Button',
        path: '/assembly/button',
        component: () => import('@/views/assembly/button'),
        meta: {
          title: '按钮',
          roles:['all']
        },
      },
      {
        name: 'Card',
        path: '/assembly/card',
        component: () => import('@/views//assembly/card'),
        meta: {
          title: '卡片',
          roles:['all']
        },
      },
      {
        name: 'Table',
        path: '/assembly/table',
        component: () => import('@/views//assembly/table'),
        meta: {
          title: '表格',
          roles:['all']
        }
      }]
  },{
    name: 'Acl',
    path: '/acl',
    component: routerView,
    meta: {
      title: '权限管理',
      icon: 'el-icon-lock',
      permission: true,
      roles:['admin']
    },
    children: [
      {
        name: 'User',
        path: '/acl/user',
        component: () => import('@/views/acl/user/list'),
        meta: {
          title: '用户管理',
          roles:['admin']
        },
      },
      {
        name: 'Role',
        path: '/acl/role',
        component: () => import('@/views/acl/role/list'),
        meta: {
          title: '角色管理',
          roles:['admin']
        },
      },
      {
        name: 'RoleAuth',
        path: '/acl/auth/:id',
        component: () => import('@/views/acl/role/roleAuth'),
        meta: {
          activeMenu: '/acl/role/list',
          title: '角色授权',
          roles:['admin']
        },
        hidden: true
      },{
        name: 'Permission',
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/list'),
        meta: {
          title: '权限管理',
          roles:['admin']
        },
      },]
  }];

export default asyncRoutes