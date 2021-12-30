import gdData from '../geojson/gdData'
/**
 * 天地图
 */
export const tiandituLayer = (L) => {
  const mapKey = '40e50cca6823476482e8721bb2eee900'
  /**
   * 天地图行政图
   */
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
  /**
   * 高德行政地图
   */
  const gaoDeNormal = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
  })
  /**
   * 高德影像图
   */
  const gaoDeImgM = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    maxZoom: 18,
    minZoom: 5
  })
  const gaoDeImgA = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion.Map', {
    maxZoom: 18,
    minZoom: 5
  })
  const image = L.layerGroup([gaoDeImgM, gaoDeImgA])
  return [gaoDeNormal, image]
}

/**
 * geoserver
 */
export const mlLayer = (L) => {
  const gdLayer = L.geoJSON(gdData, {
    style: function (feature) {
      return { color: feature.properties.color }
    }
  })
  return gdLayer
}
