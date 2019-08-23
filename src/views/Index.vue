<template>
	<div class="index">
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
	export default {
		components: {Swiper},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		activated () {
			
		}
	}
</script>

<style>
</style>
