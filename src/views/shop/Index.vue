<template>
	<div class="shop-detail page">
		<cl-header></cl-header>
		<swiper></swiper>
		
		<van-tabs v-model="active" title-active-color='#09bb07'>
			<van-tab title="商家介绍">
				<div class="shop-info">
					<h1>店铺名称</h1>
					<p>林先生：15960209969</p>
					<p>店铺地址，点击可启用导航</p>
				</div>
			</van-tab>
			<van-tab title="全部商品">
				<cl-list></cl-list>
			</van-tab>
			<van-tab title="商家活动">
				图文介绍
			</van-tab>
		</van-tabs>
		<router-link tag='footer' to='/pay' class='footer'>
			<i class="iconfont">&#xe612;</i>
			向商家付款
		</router-link>
	</div>
</template>

<script>
	import Swiper from '@c/Swiper'
	export default {
		components: {Swiper},
		data () {
			return {
				active : 0
			}
		}
	}
</script>

<style>
</style>
