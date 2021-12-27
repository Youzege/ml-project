<template>
	<div class="app-wrapper">
		<!-- 顶部 -->
		<div class="fixed-header">
			<navbar />
		</div>

		<div class="main-container">
			<!-- 左侧 侧边栏-->
			<sidebar />
			<!-- 右侧 内容 -->
			<app-main />
		</div>
	</div>
</template>

<script>
	import { AppMain, Navbar, Sidebar } from './components'
	export default {
		name: 'layout',
		components: {
			AppMain,
			Navbar,
			Sidebar
		}
	}
</script>

<style lang='scss' scoped>
	@import '~@/styles/mixin.scss';
	@import '~@/styles/variables.scss';
	.app-wrapper {
		@include clearfix;
		@include relative;
	}
</style>
