import Cookies from "js-cookie";

const TokenKey = 'vue_admin_template_token'

export function getToken(){
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    console.log('2.设置token:'+TokenKey,token);
    return Cookies.set(TokenKey, token)
  }
  
export function removeToken() {
    return Cookies.remove(TokenKey)
  }