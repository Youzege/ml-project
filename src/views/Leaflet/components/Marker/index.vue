<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: 'LMarker',
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
			useMarker() {
				// 标记
				L.marker([23.1520135, 113.3231695])
					.addTo(this.map)
					.bindPopup('我的公司')
					.openPopup()
			}
		},
		mounted() {
			this.useMarker()
		}
	}
</script>

<style lang='scss' scoped>
</style>
