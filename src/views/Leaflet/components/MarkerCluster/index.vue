<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: 'MarkerCluster',
		components: {
			BaseMap
		},
		data() {
			return {
				map: null
			}
		},
		methods: {
			getMap(map) {
				this.map = map
			},
			markerCluster() {
				const map = this.map
				/**
				 * 聚合点效果
				 */
				const createMarkerCluster = () => {
					return L.markerClusterGroup()
				}
				// 随机坐标
				const getRandomLatLng = (map) => {
					const bounds = map.getBounds()
					const southWest = bounds.getSouthWest()
					const northEast = bounds.getNorthEast()
					const lngSpan = northEast.lng - southWest.lng
					const latSpan = northEast.lat - southWest.lat

					return L.latLng(
						southWest.lat + latSpan * Math.random(),
						southWest.lng + lngSpan * Math.random()
					)
				}
				// 创建标记点
				const createMarkerByLatLng = (latlng, options) => {
					return L.marker(latlng, options)
				}
				const cluster = createMarkerCluster()
				for (let i = 0; i < 10000; i++) {
					const latlng = getRandomLatLng(map)
					const marker = createMarkerByLatLng(latlng)
					cluster.addLayer(marker)
				}
				map.addLayer(cluster)
			}
		},
		mounted() {
			this.markerCluster()
		}
	}
</script>

<style lang='scss' scoped>
</style>
