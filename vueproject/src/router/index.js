//引入Vue|Vue-router
import Vue from 'vue'
import Router from 'vue-router'

import constantRoutes from './modules/constantRoutes'

//使用路由插件
Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history', // require service support
  routes: constantRoutes
})


const router = createRouter()

//重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};
export default router