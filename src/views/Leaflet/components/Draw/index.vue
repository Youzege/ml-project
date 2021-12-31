<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import BaseMap from './../BaseMap'
	export default {
		name: 'Draw',
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
			useDraw() {
				const map = this.map
				console.log(map)
				map.pm.addControls({
					position: 'topleft',
					drawCircle: false
				})
			}
		},
		mounted() {
			this.useDraw()
		}
	}
</script>

<style lang='scss' scoped>
</style>
