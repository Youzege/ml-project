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
        path: 'basicLineChart',
        meta: {
          navName: '基础折线图'
        },
        component: () => import('@/views/Echarts/components/BasicLineChart')
      },
      {
        path: 'basicBar',
        meta: {
          navName: '基础柱状图'
        },
        component: () => import('@/views/Echarts/components/BasicBar')
      }
    ]
  }
]

export default echartsRoutes
