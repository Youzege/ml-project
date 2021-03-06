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
          navName: '地图底图'
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
      },
      {
        path: 'change-map',
        meta: {
          navName: '切换图层'
        },
        component: () => import('@/views/Leaflet/components/ChangeMap')
      },
      {
        path: 'view-latlng',
        meta: {
          navName: '鼠标坐标'
        },
        component: () => import('@/views/Leaflet/components/ViewLatLng')
      },
      {
        path: 'marker-cluster',
        meta: {
          navName: '聚合效果'
        },
        component: () => import('@/views/Leaflet/components/MarkerCluster')
      },
      {
        path: 'mini-map',
        meta: {
          navName: '小地图'
        },
        component: () => import('@/views/Leaflet/components/MiniMap')
      },
      {
        path: 'draw',
        meta: {
          navName: '绘制图形'
        },
        component: () => import('@/views/Leaflet/components/Draw')
      },
      {
        path: 'geo-json',
        meta: {
          navName: '加载geoserver'
        },
        component: () => import('@/views/Leaflet/components/GeoJSON')
      }
    ]
  }
]

export default leafletRoutes
