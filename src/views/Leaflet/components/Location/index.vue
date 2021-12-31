<template>
	<div>
		<base-map @lmap="getMap" />
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
				map: null
			}
		},
		methods: {
			getMap(map) {
				this.map = map
			},
			useLocation() {
				// 插件地址 https://github.com/domoritz/leaflet-locatecontrolhttps://github.com/domoritz/leaflet-locatecontrol
				L.control
					.locate({
						position: 'topleft',
						strings: {
							title: '快定位我!'
						}
					})
					.addTo(this.map)
					.start()
			}
		},
		mounted() {
			this.useLocation()
		}
	}
</script>

<style lang='scss' scoped>
</style>
