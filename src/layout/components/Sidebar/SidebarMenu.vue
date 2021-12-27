<template>
	<el-menu default-active="1-1" active-text-color="orange" router>
		<sidebar-item />
	</el-menu>
</template>

<script>
	import SidebarItem from './SidebarItem.vue'
	export default {
		name: 'SidebarMenu',
		components: {
			SidebarItem
		},
		data() {
			return {
				menuList: []
			}
		},
		methods: {}
	}
</script>

<style lang='scss' scoped>
	.el-menu {
		border: none;
	}
</style>
