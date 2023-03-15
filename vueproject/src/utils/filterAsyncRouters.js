/**
 * 
 * @param {Array} routesTree    动态路由 
 * @param {String} currentRole  角色信息
 * @returns {Array} res      角色对应的动态路由
 */

export default function filterAsyncRoutes(routesTree, userRoles) {
    const res = [];
    routesTree.forEach((item) => {
      const temp = { ...item };
      temp.meta = temp.meta || {};
      temp.meta.roles = temp.meta.roles || []; 
      let hasPermission = temp.meta.roles.includes(userRoles);
      // 拥有权限 || 角色为admin || 当前路由的全部用户可见
      if (hasPermission || userRoles === "admin" || temp.meta.roles.includes("all")) {
        if (temp.children) {
          temp.children = filterAsyncRoutes(temp.children, userRoles);
        }
        res.push(temp);
      }
    });
    return res;
}