<template>
	<div class="welcome">
		<div class="logo"></div>
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
		height: calc(100vh - 210px);
		.logo {
			display: inline-block;
			width: 100%;
			height: inherit;
			background-image: url(https://cdn.jsdelivr.net/gh/Youzege/my-imgs@main/logo/pet-logo-3.png);
			background-size: contain;
			background-position: 50%;
			background-repeat: no-repeat;
		}
	}
</style>
