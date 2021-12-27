const leafletRoutes = [
  {
    path: '/leaflet',
    component: () => import('@/layout/index'),
    meta: {
      navName: 'Leaflet',
      icon: 'el-icon-location'
    },
    children: [
      {
        path: 'BaseMap',
        meta: {
          navName: '地图地图'
        },
        component: () => import('@/views/Leaflet/components/BaseMap')
      }
    ]
  }
]

export default leafletRoutes
