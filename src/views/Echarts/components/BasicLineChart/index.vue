<template>
	<div id="main" class="mychart"></div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		name: '',
		data() {
			return {}
		},
		methods: {
			createChart() {
				const myChart = echarts.init(document.getElementById('main'))

				const option = {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							data: [150, 230, 224, 218, 135, 147, 260],
							type: 'line'
						}
					]
				}
				myChart.setOption(option)
			}
		},
		mounted() {
			this.createChart()
		}
	}
</script>

<style lang='scss' scoped>
	.mychart {
		width: 500px;
		height: 500px;
	}
</style>
