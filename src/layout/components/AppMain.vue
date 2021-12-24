<template>
	<div class="app-main">AppMain</div>
</template>

<script>
	export default {
		name: 'AppMain'
	}
</script>

<style lang='scss' scoped>
	@import '~@/styles/variables.scss';
	.app-main {
		min-height: calc(100vh - 60px);
		width: calc(100vw - 210px);
		position: relative;
		left: $sideBarWidth;
		overflow: hidden;
		padding: 61px 20px 20px 20px;
		box-sizing: border-box;
	}
</style>
