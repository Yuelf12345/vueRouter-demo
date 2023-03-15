/* 引入最外层骨架的一级路由组件*/
import Layout from '@/layout'
  
  // 任意路由 
const anyRouters = [{
    path:'/',
    component:Layout,
    redirect: '/dashboard',
    permission: true,
    roles:['all'],
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-menu' ,roles:['all']}
    }]
  }]

  export default anyRouters