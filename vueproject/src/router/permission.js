import router from "@/router";
import store from "@/store";
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import asyncRoutes from "@/router/modules/asyncRoutes";
import anyRouters from "@/router/modules/anyRouters";
import filterAsyncRoutes from '@/utils/filterAsyncRouters'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']  //  无重定向白名单


// 全局前置守卫鉴权
router.beforeEach(async(to,from,next)=>{
    //进度条开始
    NProgress.start()

    var userRoutes = [];
    const hasToken = getToken()
    //是否有角色
    if(hasToken){
        //添加任意路由
        userRoutes.unshift(...anyRouters)

        if(to.path === '/login'){
            next({ path: '/' })
            NProgress.done()
        }else{
            //获取用户名
            const hasGetUserInfo = store.getters.name
            if(hasGetUserInfo){
                next()
            }else{
                try{
                    const result = await store.dispatch('user/getInfo');
                    // const userRoutes = filterAsyncRoutes(asyncRoutes, result.roles[0]);
                    // userRoutes.push(...anyRouters)

                    userRoutes[0].children.push(...filterAsyncRoutes(asyncRoutes, result.roles[0]));
                    console.log(userRoutes);
                    console.log(router);
                    store.commit("user/SET_ROLES", userRoutes);
                    router.addRoutes(userRoutes);
                    
                    next({...to})
                }catch(error){
                    //移除token
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    //跳转到登录
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    }else{
        //没有token
        //当前路径是不需要验证白名单 放行
        if(whiteList.indexOf(to.path) !== -1 ){
            next()
        }else {
        //跳转到登录
        next(`/login?redirect=${to.path}`)
        NProgress.done()
        }
    }
})



router.afterEach(() => {
    // 进度条结束
    NProgress.done()
  })