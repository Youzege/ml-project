/**
 * 天地图
 */
export const tiandituLayer = (L) => {
  const mapKey = '40e50cca6823476482e8721bb2eee900'
  const mapUrl =
    'http://t7.tianditu.com/DataServer?T={id}_w&x={x}&y={y}&l={z}&tk={tk}'

  const layerVec = L.tileLayer(mapUrl, {
    attribution: '简单组件库~ <a>@author youzge</a>',
    tileSize: 512,
    zoomOffset: -1,
    id: 'vec',
    tk: mapKey
  })

  const layerCva = L.tileLayer(mapUrl, {
    tileSize: 512,
    zoomOffset: -1,
    id: 'cva',
    tk: mapKey
  })
  const tiandituLayer = L.layerGroup([layerVec, layerCva])
  return tiandituLayer
}

/**
 * 高德地图
 */
export const amapLayer = (L) => {
  const amap = L.tileLayer(
    'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
    {
      subdomains: '1234'
    }
  )
  return amap
}
