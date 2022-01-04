<template>
	<div>
		<base-map @lmap="getMap" />
	</div>
</template>

<script>
	import { common } from '@/mixins'
	import BaseMap from './../BaseMap'
	export default {
		name: 'GeoJSON',
		components: {
			BaseMap
		},
		data() {
			return {
				map: null
			}
		},
		mixins: [common],
		methods: {
			getMap(map) {
				this.map = map
			}
		},
		mounted() {
			console.log(this.map)
		}
	}
</script>

<style lang='scss' scoped>
</style>
