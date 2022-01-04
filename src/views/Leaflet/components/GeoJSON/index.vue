<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import { common } from '@/mixins'
	import axios from 'axios'
	import BaseMap from './../BaseMap'
	// import gdData from './../BaseMap/geojson/gdData'
	export default {
		name: 'GeoJSON',
		components: {
			BaseMap
		},
		data() {
			return {
				map: null,
				currentCenter: { lat: 23.34477759760015, lng: 112.379150390625 }, // 当前的坐标
				currentBounds: {
					_northEast: {
						lat: 25.54244147012483,
						lng: 117.65258789062501
					},
					_southWest: {
						lat: 21.110124881147883,
						lng: 107.10571289062501
					}
				}
			}
		},
		mixins: [common],
		methods: {
			getMap(map) {
				this.map = map
			},
			calculateXY() {
				const that = this

				// // 计算viewparams坐标
				// const viewparamsX1 = that.currentBounds._southWest.lng
				// const viewparamsY1 = that.currentBounds._southWest.lat
				// const viewparamsX2 = that.currentBounds._northEast.lng
				// const viewparamsY2 = that.currentBounds._northEast.lat

				// const viewLengthX = viewparamsX2 - that.currentCenter.lng
				// const viewLengthY = viewparamsY2 - that.currentCenter.lat

				// // 计算BBOX坐标
				// const bboxX1 = viewparamsX1 - viewLengthX
				// const bboxY1 = viewparamsY1 - viewLengthY
				// const bboxX2 = viewparamsX2 + viewLengthX
				// const bboxY2 = viewparamsY2 + viewLengthY

				// let cityName = null

				return new Promise(function (resolve, reject) {
					axios({
						method: 'get',
						url: `${that.mapApi}/geoserver/mapQ/wms`,
						params: {
							FORMAT: 'application/json;type=geojson',
							BBOX: '109.65076446533206,20.214119564095625,117.31371688662101,25.519671324350817',
							LAYERS: 'mapQ:QueryRegion_SG',
							SERVICE: 'WMS',
							SRS: 'EPSG:4326',
							VERSION: '1.1.1',
							TRANSPARENT: 'true',
							STYLES: '',
							WIDTH: '800',
							exceptions: 'application/vnd.ogc.se_inimage',
							HEIGHT: '800',
							viewparams: `x:${that.currentCenter.lng};y:${that.currentCenter.lat}`,
							REQUEST: 'GetMap'
						}
					}).then((res) => {
						// if (res.data.features.length > 0) {
						// 	cityName = res.data.features[0].properties.name
						// }
						resolve([
							res.data
							// viewparamsX1,
							// viewparamsY1,
							// viewparamsX2,
							// viewparamsY2,
							// bboxX1,
							// bboxY1,
							// bboxX2,
							// bboxY2,
							// cityName
						])
					})
				})
			},
			async useGeoJSON() {
				const data = await this.calculateXY()
				console.log(data)
				const geoLayer = L.geoJson(data[0], {
					style: function (feature) {
						return { color: feature.properties.color }
					}
				})
				geoLayer.addTo(this.map)
			}
		},
		mounted() {
			// console.log(this.map.getCenter())
			// console.log(this.map.getBounds())
			this.useGeoJSON()
		}
	}
</script>

<style lang='scss' scoped>
</style>
