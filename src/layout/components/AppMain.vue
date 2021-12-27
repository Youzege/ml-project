<template>
	<div class="app-main">
		<card />
	</div>
</template>

<script>
	import Card from './Card'
	export default {
		name: 'AppMain',
		components: {
			Card
		}
	}
</script>

<style lang='scss' scoped>
	@import '~@/styles/variables.scss';
	.app-main {
		min-height: calc(100vh - 60px);
		width: calc(100vw - 210px);
		position: absolute;
		left: $sideBarWidth;
		overflow: hidden;
		padding: 30px 20px 20px 20px;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
