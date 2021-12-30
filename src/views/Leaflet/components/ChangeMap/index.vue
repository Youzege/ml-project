<template>
	<div class="container">
		<base-map @lmap="getMap" />
		<div class="chang-map">
			<el-radio-group v-model="curMap" fill="#ffa500" @change="changeMap">
				<el-radio-button label="amap">高德地图 </el-radio-button>
				<el-radio-button label="tdt">天地图</el-radio-button>
			</el-radio-group>
		</div>
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: '',
		components: {
			BaseMap
		},
		data() {
			return {
				map: null,
				curMap: 'amap',
				mapLayers: null
			}
		},
		methods: {
			getMap(map, layers) {
				this.map = map
				this.mapLayers = layers
			},
			changeMap(val) {
				const tdt = this.mapLayers[2]
				const amap = this.mapLayers[0]
				switch (val) {
					case 'amap':
						tdt.remove(this.map)
						amap.addTo(this.map)
						break
					case 'tdt':
						amap.remove(this.map)
						tdt.addTo(this.map)
						break
				}
			}
		},
		mounted() {
			this.changeMap()
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		position: relative;
		.chang-map {
			position: absolute;
			top: 5px;
			right: 5px;
			z-index: 1000;
		}
	}
</style>
