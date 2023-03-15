module.exports = {
    login :async ctx=>{
        let {username,password} = ctx.request.body;
        if(username == '11' && password !== ''){
            ctx.status = 200;
            return ctx.body = {
                code:2000,
                flag:true,
                message:"验证成功",
                data:{
                    token:"admin"
                }
            }
        }else if(username == '22' && password !== ''){
            ctx.status = 200;
            return ctx.body = {
                code:2000,
                flag:true,
                message:"验证成功",
                data:{
                    token:"user"
                }
            }
        }else{
            ctx.status = 404;
            return ctx.body = {
                code:4000,
                flag:false,
                message:"登录失败",
            }
        }
    },
    getInfo :async ctx =>{
        let { token }=ctx.query
        if( token == 'admin'){
            return ctx.body = {
                code:2000,
                data:{
                    roles: ['admin'],
                    introduction: 'I am a super administrator',
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                    name: 'Super Admin'
                }
            }
        }else if (token = 'user'){
            return ctx.body = {
                code:2000,
                data:{
                    roles: ['user01'],
                    introduction: 'I am an user01',
                    avatar: 'https://img.soogif.com/1CMjb5x0EATQArD0vGJ1TionelKfOQ2r.gif',
                    name: 'Normal User01'
                }
            }
        }else {
            return ctx.body ={
                code: 50008,
                message: 'Login failed, unable to get user details.'
            }
        }
    },
    
    logout :async ctx => {
        return ctx.body = {
            code: 20000,
            data: 'success'
        }
    }
};