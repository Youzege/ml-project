const leafletRoutes = [
  {
    path: '/leaflet',
    meta: {
      navName: 'Leaflet',
      icon: 'el-icon-location'
    },
    children: [
      {
        path: 'tianditu',
        meta: {
          navName: '天地图'
        }
      }
    ]
  }
]

export default leafletRoutes
