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
				this.map.locate({ setView: true, maxZoom: 18 })
				this.map.on('locationfound', function (e) {
					console.log(e)
					const radius = e.accuracy / 2
					L.marker(e.latlng).addTo(this).bindPopup('你在这个圈啦')
					L.circle(e.latlng, radius).addTo(this)
				})
				this.map.on('locationerror', function (e) {
					console.log(`定位出错! ---> ${e}`)
				})
			}
		},
		mounted() {
			this.useLocation()
		}
	}
</script>

<style lang='scss' scoped>
</style>
