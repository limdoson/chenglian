<template>
	<div class="shop-detail page">
		<cl-header></cl-header>
		<van-swipe :autoplay='2000'  indicator-color="white" >
			<van-swipe-item v-for='item in slide' :key='item'>
				<img :src="item" alt="">
			</van-swipe-item>
		</van-swipe>
		<van-tabs v-model="active" title-active-color='#09bb07'>
			<van-tab title="商家介绍">
				<div class="shop-info">
					<h1>{{shop_name}}</h1>
					<p>{{real_name}}：{{telephone}}</p>
					<p>{{province}}{{city}}{{district}}{{address}}</p>
				</div>
			</van-tab>
			<van-tab title="全部商品">
				<cl-load-list url='/api/shop/detail'></cl-load-list>
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
				active : 0,
				slide : null,//轮播图
				shop_name : null,//店铺名称
				real_name : null,//联系人姓名
				telephone : null,//联系电话
				latitude : null,//坐标
				longitude : null,//坐标
				province : null,//省
				city : null,//市
				district : null,//区
				address : null,//详细地址
			}
		},
		created () {
			this.http.post('/api/shop/detail',{
				id : this.$route.params.id
			}).then(res =>{
				this.slide = res.result.slide
				this.shop_name = res.result.shop_name
				this.real_name = res.result.real_name
				this.telephone = res.result.telephone
				this.latitude = res.result.latitude
				this.longitude = res.result.longitude
				this.province = res.result.province
				this.city = res.result.city
				this.district = res.result.district
				this.address = res.result.address
			})
		},
	}
</script>

<style>
</style>
