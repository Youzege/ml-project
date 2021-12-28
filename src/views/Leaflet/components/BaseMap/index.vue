<template>
	<div id="map"></div>
</template>

<script>
	import { tiandituLayer } from './Layers/tianditu'
	export default {
		name: 'BaseMap',
		data() {
			return {
				map: null
			}
		},
		methods: {
			createMap() {
				this.map = L.map('map', {
					zoomControl: true,
					maxZoom: 18,
					minZoom: 2
				}).setView([23.1520135, 113.3231695], 12) // 设置中心点，缩放级别)
				tiandituLayer(L).addTo(this.map)
				this.$emit('lmap', this.map)
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
		min-height: 550px;
	}
</style>
