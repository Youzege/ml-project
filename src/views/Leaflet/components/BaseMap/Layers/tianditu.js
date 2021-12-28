export const tiandituLayer = (L) => {
  const mapKey = '40e50cca6823476482e8721bb2eee900'
  const mapUrl =
    'http://t0.tianditu.com/DataServer?T={id}_w&x={x}&y={y}&l={z}&tk={tk}'

  const layerVec = L.tileLayer(mapUrl, {
    attribution: '这是小森林~ <a>@author youzge</a>',
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
