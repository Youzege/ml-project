<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: 'MiniMap',
		components: {
			BaseMap
		},
		data() {
			return {
				map: null,
				mapLayers: null
			}
		},
		methods: {
			getMap(map, layers) {
				this.map = map
				this.mapLayers = layers
			},
			useMiniMap() {
				const map = this.map
				const amap = this.mapLayers[0]
				L.control
					.minimap(amap, {
						width: 100,
						height: 100,
						toggleDisplay: true,
						strings: {
							hideText: '隐藏小地图',
							showText: '展开小地图'
						}
					})
					.addTo(map)
			}
		},
		mounted() {
			this.useMiniMap()
		}
	}
</script>

<style lang='scss' scoped>
</style>
