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
			}
		},
		mounted() {}
	}
</script>

<style lang='scss' scoped>
</style>
