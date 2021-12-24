<template>
	<div>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>Leaflet组件</span>
			</template>
			<el-menu-item-group>
				<template slot="title">组件列表</template>
				<el-menu-item index="1-1">组件1</el-menu-item>
				<el-menu-item index="1-2">组件2</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span slot="title">Echarts组件</span>
		</el-menu-item>
	</div>
</template>

<script>
	export default {
		name: 'SidebarItem'
	}
</script>

<style lang='scss' scoped>
</style>
