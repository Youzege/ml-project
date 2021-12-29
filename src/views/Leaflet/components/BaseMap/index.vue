<template>
	<div class="container">
		<div id="map"></div>
		<!-- <div class="chang-map">
			<el-radio-group v-model="curMap" fill="#ffa500" @change="changeMap">
				<el-radio-button label="amap">高德地图 </el-radio-button>
				<el-radio-button label="tdt">天地图</el-radio-button>
			</el-radio-group>
		</div> -->
	</div>
</template>

<script>
	import { amapLayer, tiandituLayer } from './Layers'
	export default {
		name: 'BaseMap',
		data() {
			return {
				map: null,
				curMap: 'amap',
				mapLayers: []
			}
		},
		methods: {
			createMap() {
				const tdt = tiandituLayer(L)
				const amap = amapLayer(L)
				this.mapLayers.push(amap, tdt)
				this.map = L.map('map', {
					zoomControl: true,
					maxZoom: 18,
					minZoom: 2
				}).setView([23.1520135, 113.3231695], 12) // 设置中心点，缩放级别)
				amap.addTo(this.map)
				this.$emit('lmap', this.map, this.mapLayers)
			}
			// changeMap(val) {
			// 	const tdt = this.mapLayers[1]
			// 	const amap = this.mapLayers[0]
			// 	switch (val) {
			// 		case 'amap':
			// 			tdt.remove(this.map)
			// 			amap.addTo(this.map)
			// 			break
			// 		case 'tdt':
			// 			amap.remove(this.map)
			// 			tdt.addTo(this.map)
			// 			break
			// 	}
			// }
		},
		mounted() {
			this.createMap()
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		position: relative;
		#map {
			width: 100%;
			min-height: 500px;
		}
		.chang-map {
			position: absolute;
			top: 5px;
			right: 5px;
			z-index: 1000;
		}
	}
</style>
