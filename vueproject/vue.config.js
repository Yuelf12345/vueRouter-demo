const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //检查命名规范
  devServer:{
    proxy:{
    "/api":{
        target:"http://localhost:8081",
        changeOrigin:true,
        pathRewrite:{
        "^/api":""
        }
    }
    }
}
})