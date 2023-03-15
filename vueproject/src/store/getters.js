const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    menuData: state => {
      return state.user.resultAsyncRoutes.length !== 0
        ? state.user.resultAsyncRoutes[0].children
        : "resultAllRoutes 无数据";
    },
  }
  export default getters