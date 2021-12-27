const echartsRoutes = [
  {
    path: '/echarts',
    component: () => import('@/layout/index'),
    meta: {
      navName: 'Echarts',
      icon: 'el-icon-s-data'
    },
    children: [
      {
        path: 'start',
        meta: {
          navName: '基础图表'
        }
      }
    ]
  }
]

export default echartsRoutes
