/**
 * 天地图
 */
export const tiandituLayer = (L) => {
  const mapKey = '40e50cca6823476482e8721bb2eee900'
  const tdtNormalM = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
    key: mapKey,
    maxZoom: 18,
    minZoom: 5
  })
  const tdtNormalA = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion.Map', {
    key: mapKey,
    maxZoom: 18,
    minZoom: 5
  })
  const tdtNormal = L.layerGroup([tdtNormalM, tdtNormalA])
  return tdtNormal
}

/**
 * 高德地图
 */
export const amapLayer = (L) => {
  const amap = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
  })
  return amap
}
