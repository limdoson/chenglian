<template>
	<div class="index">
		<!-- 搜索 -->
		<search readonly @onClick='toSearchPage'></search>
		<!-- 轮播图 -->
		<swiper></swiper>
		<!-- 公告 -->
		<marquee class='notice' behavior="" direction="left">首页公告</marquee>
		<!-- 图片导航 -->
		<ul class="img-menu s-a">
			<router-link tag='li' to='/product-cla'>
				<img src="../assets/img/cls.png" alt="">
				<p>所有商品</p>
			</router-link>
			<router-link tag='li' to='/nearby-shops'>
				<img src="../assets/img/shop.png" alt="">
				<p>附近商家</p>
			</router-link>
			<router-link tag='li' to='/shop-apply'>
				<img src="../assets/img/apply.png" alt="">
				<p>申请开店</p>
			</router-link>
			<router-link tag='li' to='/article-detail'>
				<img src="../assets/img/farm.png" alt="">
				<p>诚联农场</p>
			</router-link>
		</ul>
		<!-- 栏目列表 -->
		<cl-list></cl-list>
		<cl-list title='今天推荐'></cl-list>
		<cl-list title='今日优选'></cl-list>
	</div>
</template>

<script>
	import Swiper from '@c/Swiper'
	import Search from '@c/Search'
	export default {
		components: {Swiper,Search},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		mounted () {
			// window.onscroll = () => {
			// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 	var scrollHeight = window.innerHeight;
			// 	var dcHeight = document.body.clientHeight;
			// 	
			// 	if ((scrollTop + scrollHeight) === (dcHeight)) {
			// 		alert('加载更多')
			// 	}
			// 	
			// }
		},
		activated () {
			
		},
		methods :{
			toSearchPage () {
				this.$router.push('/search')
			}
		}
	}
</script>

<style>
</style>
