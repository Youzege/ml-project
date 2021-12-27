<template>
	<el-menu :default-active="currentRoute" active-text-color="orange" router>
		<sidebar-item v-for="item in menuList" :key="item.path" :item="item" />
	</el-menu>
</template>

<script>
	import { filterRoutes } from '@/utils/route.js'
	import SidebarItem from './SidebarItem.vue'
	export default {
		name: 'SidebarMenu',
		components: {
			SidebarItem
		},
		data() {
			return {
				menuList: [],
				currentRoute: null
			}
		},
		methods: {
			getMenuList() {
				const routes = this.$router.options.routes
				const result = filterRoutes(routes)
				this.menuList = result
			},
			currentPath() {
				this.currentRoute = this.$route.path
			}
		},
		mounted() {
			this.getMenuList()
			this.currentPath()
		}
	}
</script>

<style lang='scss' scoped>
	.el-menu {
		border: none;
	}
</style>
