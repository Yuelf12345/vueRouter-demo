// 常量路由 
const constantRoutes = [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },{
    path: '*',
    component: () => import('@/views/notFount/NotFound.vue'),
    hidden: true
}]
export default constantRoutes;