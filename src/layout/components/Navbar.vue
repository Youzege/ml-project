<template>
	<div class="navbar">
		<div class="left-content">
			<img class="dog-img" src="./../../assets/dog-icon.png" alt="dog" />
			<span class="title">Leaflet & Echarts</span>
		</div>
		<div class="right-content">
			<el-tooltip
				class="item"
				effect="light"
				content="项目仓库"
				placement="bottom-start"
			>
				<a
					href="https://github.com/Youzege/ml-project"
					target="_blank"
					class="home-icon"
				>
					<i class="iconfont icon-github1"></i
				></a>
			</el-tooltip>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style lang='scss' scoped>
	@import url(//at.alicdn.com/t/font_3078636_nflutq35slq.css);
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 0 10px;
		box-sizing: border-box;
		width: 100%;
		height: 60px;
		background: rgb(255, 166, 0, 0.5);
		overflow: hidden;
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
		.icon-github1 {
			padding-right: 10px;
			font-size: 28px;
		}
	}
</style>
