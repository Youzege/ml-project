<template>
	<div class="app-wrapper">
		<!-- 左侧 侧边栏-->
		<sidebar />
		<!-- 右侧 -->
		<div class="main-container">
			<!-- 顶部 -->
			<div class="fixed-header">
				<navbar />
			</div>
			<!-- 内容 -->
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
	.app-wrapper {
		@include clearfix;
		@include relative;
	}
</style>
