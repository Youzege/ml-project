<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<breadcrumb />
		</div>
		<router-view class="card-main"></router-view>
	</el-card>
</template>

<script>
	import Breadcrumb from '@/layout/components/Breadcrumb/index'
	export default {
		name: 'Card',
		components: {
			Breadcrumb
		}
	}
</script>

<style lang='scss' scoped>
	.box-card {
		min-height: calc(100vh - 110px);
		overflow: hidden;
	}
</style>
