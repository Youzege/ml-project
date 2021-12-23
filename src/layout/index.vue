<template>
	<div class="app-wrapper">
		<!-- 左侧 -->
		<div>侧边栏</div>
		<!-- 右侧 -->
		<div class="main-container"></div>
	</div>
</template>

<script>
	export default {
		name: ''
	}
</script>

<style lang='scss' scoped>
	.app-wrapper {
		@include clearfix;
		@include relative;
	}
</style>
