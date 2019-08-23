<template>
	<ul class="page-footer s-a">
		<router-link tag='li' to='/'>
			<i class="iconfont">&#xe6bc;</i>
			<p>首页</p>
		</router-link>
		<router-link tag='li' to='/shop-car'>
			<i class="iconfont">&#xe65c;</i>
			<p>购物车</p>
		</router-link>
		<!-- <li class='logo'>
			<img src="../assets/img/logo.jpg" alt="">
		</li> -->
		<router-link tag='li' to='/user-center'>
			<i class="iconfont">&#xe608;</i>
			<p>我的</p>
		</router-link>
		<router-link tag='li' to='/distribution'>
			<i class="iconfont">&#xe600;</i>
			<p>推广中心</p>
		</router-link>
	</ul>
	
</template>
<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style scoped lang="less">
	
</style>