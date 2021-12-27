<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>组件名称</span>
			<el-button style="float: right; padding: 3px 0" type="text"
				>组件路径</el-button
			>
		</div>
		<router-view class="card-main"></router-view>
	</el-card>
</template>

<script>
	export default {
		name: ''
	}
</script>

<style lang='scss' scoped>
	.box-card {
		min-height: calc(100vh - 110px);
		overflow: hidden;
	}
</style>
