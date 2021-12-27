<template>
	<div>
		<el-breadcrumb separator="/">
			<transition-group name="breadcrumb" mode="out">
				<el-breadcrumb-item v-for="item in breadcrumbData" :key="item.path">
					<span>
						{{ item.meta.navName }}
					</span>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default {
		name: 'Breadcrumb',
		data() {
			return {
				breadcrumbData: []
			}
		},
		methods: {
			getBreadcrumbData() {
				const routes = this.$route
				if (routes.meta && routes.meta.navName) {
					this.breadcrumbData = routes.matched.filter((item) => item.path !== '')
				}
				console.log(this.breadcrumbData)
			}
		},
		watch: {
			$route(to, from) {
				this.getBreadcrumbData()
			},
			immediate: true
		},
		mounted() {
			this.getBreadcrumbData()
		}
	}
</script>

<style lang='scss' scoped>
	.breadcrumb {
		display: inline-block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		::v-deep .no-redirect {
			color: #97a8be;
			cursor: text;
		}
	}
</style>
