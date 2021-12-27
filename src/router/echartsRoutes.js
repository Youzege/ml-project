const echartsRoutes = [
  {
    path: '/echarts',
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
