<template>
	<div class="sidebar-container">Sidebar</div>
</template>

<script>
	export default {
		name: 'Sidebar'
	}
</script>

<style lang='scss' scoped>
	@import '~@/styles/variables.scss';
	.sidebar-container {
		width: $sideBarWidth !important;
		height: calc(100vh - 50px);
		position: fixed;
		z-index: 1001;
		overflow: hidden;
	}
</style>
