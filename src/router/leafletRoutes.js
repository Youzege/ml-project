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
      },
      {
        path: 'Marker',
        meta: {
          navName: '标记'
        },
        component: () => import('@/views/Leaflet/components/Marker')
      },
      {
        path: 'Location',
        meta: {
          navName: '定位'
        },
        component: () => import('@/views/Leaflet/components/Location')
      }
    ]
  }
]

export default leafletRoutes
