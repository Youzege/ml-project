<template>
	<div class="sidebar-container">
		<h3 class="title"><i class="el-icon-s-platform"></i>前端可视化</h3>
		<el-scrollbar>
			<sidebar-menu />
		</el-scrollbar>
	</div>
</template>

<script>
	import SidebarMenu from './SidebarMenu.vue'
	export default {
		name: 'Sidebar',
		components: {
			SidebarMenu
		}
	}
</script>

<style lang='scss' scoped>
	@import '~@/styles/variables.scss';
	.sidebar-container {
		width: $sideBarWidth !important;
		height: calc(100vh - 60px);
		position: absolute;
		z-index: 1001;
		overflow: hidden;
		border-right: solid 1px #e6e6e6;
		.title {
			margin-top: 25px;
			text-align: center;
		}
	}
</style>
