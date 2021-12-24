<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical-demo"
		active-text-color="orange"
	>
		<sidebar-item />
	</el-menu>
</template>

<script>
	import SidebarItem from './SidebarItem.vue'
	export default {
		name: 'SidebarMenu',
		components: {
			SidebarItem
		}
	}
</script>

<style lang='scss' scoped>
</style>
