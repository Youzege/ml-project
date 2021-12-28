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
        path: 'base-map',
        meta: {
          navName: '地图地图'
        },
        component: () => import('@/views/Leaflet/components/BaseMap')
      },
      {
        path: 'marker',
        meta: {
          navName: '标记'
        },
        component: () => import('@/views/Leaflet/components/Marker')
      },
      {
        path: 'location',
        meta: {
          navName: '定位'
        },
        component: () => import('@/views/Leaflet/components/Location')
      }
    ]
  }
]

export default leafletRoutes
