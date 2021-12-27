/**
 * 路由规则列表
 */
export const filterRoutes = (routes, path = '') => {
  const result = []
  for (const index in routes) {
    if (routes[index].meta) {
      // 重新子路由的path
      routes[index].path = path + routes[index].path

      // 出现children就递归
      if ('children' in routes[index] && routes[index].children.length > 0) {
        // 开始递归，并传入父级的path进行下一轮拼接
        const children = filterRoutes(
          routes[index].children,
          routes[index].path + '/'
        )
        // 结构路由参数
        const currentRoutes = { ...routes[index] }
        // 重整children数据，将递归回来有用的子级数据替换掉原数据
        currentRoutes.children = children
        result.push(currentRoutes)
      } else {
        // 没有子级路由的就直接push进队列
        result.push(routes[index])
      }
    }
  }
  return result
}
