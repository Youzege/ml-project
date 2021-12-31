<template>
	<div id="map"></div>
</template>

<script>
	import { amapLayer, mlLayer, tiandituLayer } from './Layers'
	export default {
		name: 'BaseMap',
		data() {
			return {
				map: null,
				mapLayers: []
			}
		},
		methods: {
			createMap() {
				const tdt = tiandituLayer(L)
				const amap = amapLayer(L)
				const gdLayer = mlLayer(L)
				this.mapLayers.push(...amap, tdt, gdLayer)

				this.map = L.map('map', {
					zoomControl: true,
					maxZoom: 18,
					minZoom: 5
				}).setView([23.1520135, 113.3231695], 10) // 设置中心点，缩放级别)
				this.mapLayers[2].addTo(this.map)
				this.$emit('lmap', this.map, this.mapLayers)
			}
		},
		mounted() {
			this.createMap()
		}
	}
</script>

<style lang='scss' scoped>
	#map {
		width: 100%;
		min-height: 500px;
	}
</style>
