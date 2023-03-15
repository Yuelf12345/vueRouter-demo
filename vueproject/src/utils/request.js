// import axios from 'axios'

// axios.create({
//     timeout: 8000,
//     baseURL:
//       process.env.NODE_ENV === "development" ? "/api" : "http://localhost:8081/"
//   });
  
// export  function login({username , password}){
//     console.log(username,password);
//     // 接受后端数据
//     let rs  =  axios.post("/api/login",{
//         username,
//         password
//     });
//     return rs
// }

// 封装axios
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, 
    // withCredentials: true, 
    timeout: 5000 
})

// 请求拦截
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.state == 2) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            if (res.state == 1 ) {
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                            confirmButtonText: 'Re-Login',
                            cancelButtonText: 'Cancel',
                            type: 'warning'
                        })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service