<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: 'ViewLatLng',
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
			setCoordinate() {
				L.control
					.mousePosition({
						emptyString: '这里是坐标',
						prefix: '当前坐标LatLng: '
					})
					.addTo(this.map)
			}
		},
		mounted() {
			this.setCoordinate()
		}
	}
</script>

<style lang='scss' scoped>
	.view_latlng {
		position: absolute;
		bottom: 45px;
		right: 100px;
		width: 200px;
		height: 20px;
		border-radius: 5px;
		background-color: #fff;
		text-align: center;
		line-height: 20px;
		font-size: 14px;
		z-index: 1000;
		opacity: 0.9;
	}
</style>
