<template>
	<div class="index">
		<!-- 搜索 -->
		<search readonly @onClick='toSearchPage'></search>
		<!-- 轮播图 -->
		<swiper :list='flash'></swiper>
		<!-- 公告 -->
		<marquee class='notice' behavior="" direction="left">{{notice}}</marquee>
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
		<!-- 推荐商家 -->
		<cl-list title='推荐商家' :list='this.shop' type='shop'></cl-list>
		<!-- 推荐商品 -->
		<cl-load-list api-url='/api/mall/home'></cl-load-list>
	</div>
</template>

<script>
	import Swiper from '@c/Swiper'
	import Search from '@c/Search'
	export default {
		components: {Swiper,Search},
		data () {
			return {
				notice : null,//公告内容
				
				shop : null,//首页推荐商家
				flash : null,//轮播图
			}
		},
		created () {
			this.http.post('/api/mall/home',{
				
			}).then(res => {
				
				this.notice = res.result.notice;
				this.product = res.result.product;
				this.shop = res.result.shop;
				this.flash = res.result.flash;
			})
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
