<template>
	<div class="welcome">
		<img
			class="logo"
			src="https://cdn.jsdelivr.net/gh/Youzege/my-imgs@main/logo/pet-logo-12.png"
			alt="logo"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Welcome'
	}
</script>

<style lang='scss' scoped>
	.welcome {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: calc(100vh - 210px);
		.logo {
			display: inline-block;
			width: 50vw;
			height: 70vh;
		}
	}
</style>
