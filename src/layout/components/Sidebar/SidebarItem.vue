<template>
	<div>
		<el-submenu v-if="item.children" :index="item.path">
			<template slot="title">
				<i :class="item.meta.icon"></i>
				<span>{{ item.meta.navName }}</span>
			</template>
			<sidebar-item
				v-for="item in item.children"
				:key="item.path"
				:item="item"
			></sidebar-item>
		</el-submenu>
		<el-menu-item v-else :index="item.path">
			<template #title>{{ item.meta.navName }}</template>
		</el-menu-item>
	</div>
</template>

<script>
	export default {
		name: 'SidebarItem',
		props: {
			item: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang='scss' scoped>
</style>
