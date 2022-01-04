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
						data: ['A', 'B', 'C', 'D', 'E']
					},
					yAxis: {},
					series: [
						{
							type: 'bar',
							data: [23, 24, 18, 25, 18],
							barGap: '20%',
							barCategoryGap: '40%'
						},
						{
							type: 'bar',
							data: [12, 14, 9, 9, 11]
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
		width: 100%;
		// height: calc(100vh - 200px);
	}
</style>
