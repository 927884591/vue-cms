import { RouteRecordRaw } from 'vue-router'
export function mapMenu(userMenus: any[]): RouteRecordRaw[] {
  //需要返回一个路由的类型
  const routers: RouteRecordRaw[] = []
  //把所有的路由路径放到这个数组中
  const allRouter: RouteRecordRaw[] = []
  //获取文件中所有带ts的路径，主要是为了读取这些ts文件的内容
  const filesPath = require.context('../router/main', true, /\.ts/)
  filesPath.keys().forEach((key) => {
    //读取所有的路由对象，然后把它push到allRouter中
    const route = require('../router/main' + key.split('.')[1])
    allRouter.push(route.default)
  })
  //根据用户的权限，注册相对应的路由
  function getRouter(userMenus: any[]) {
    for (const menu of userMenus) {
      if (menu.type == 2) {
        const route = allRouter.find((route) => route.path === menu.url)
        if (route) {
          routers.push(route)
        }
      } else {
        getRouter(menu.children)
      }
    }
  }
  getRouter(userMenus)
  console.log(allRouter)
  console.log(filesPath.keys())
  return routers
}
