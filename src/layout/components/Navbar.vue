<template>
	<div class="navbar">
		<div class="left-content">
			<img class="dog-img" src="./../../assets/dog-icon.png" alt="dog" />
			<span class="title">Map Components</span>
		</div>
		<div class="right-content">...</div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style lang='scss' scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		box-sizing: border-box;
		width: 100%;
		height: 60px;
		background: rgb(255, 166, 0, 0.5);
		.left-content {
			display: flex;
			align-items: center;
			.dog-img {
				width: 60px;
				height: 60px;
			}
			.title {
				font-size: 30px;
				font-weight: 550;
				opacity: 0.8;
			}
		}
	}
</style>
