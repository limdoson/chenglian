<template>
	<div class="product-detail">
		<cl-header></cl-header>
		<swiper></swiper>
		<!-- 商品信息 -->
		<div class="product-info">
			<h1>商品名称</h1>
			<p>商品描述信息</p>
			<p>
				￥<span class="red">1.00</span>
			</p>
			<dl class="s-b">
				<dt>
					<i class="iconfont">&#xe88e;</i>
					已售：1000
				</dt>
				<dt>
					<i class="iconfont">&#xe609;</i>
					库存：1000
				</dt>
			</dl>
		</div>
		<!-- 图文详情与评价 -->
		<div class="detail-and-comments">
			<van-tabs v-model="active">
				<van-tab title="商品详情">
					<div class="details">
						图文详情
					</div>
				</van-tab>
				<van-tab title="评价">
					<ul class="comments">
						<li v-for='item in 4' >
							<h1 class="user-info f-s">
								<img src="../../assets/img/2.jpg" alt="">
								<span>用户昵称</span>
								<span>2018-08-08</span>
							</h1>
							<p class='comments-detail'>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
						</li>
					</ul>
					<router-link tag='p' to='/product-comments' class='view-more'>
						<i class="iconfont">&#xe613;</i>
						查看更多
					</router-link>
				</van-tab>
			</van-tabs>
		</div>
		<!-- 底部导航菜单 -->
		<van-goods-action>
			<!-- <van-goods-action-icon
				icon="chat-o"
				text="客服"
				@click="onClickIcon"
			/> -->
			<van-goods-action-icon
				icon="cart-o"
				text="购物车"
				@click="$router.push('/shop-car')"
			/>
			<van-goods-action-button
				type="warning"
				text="加入购物车"
				@click="joinShopCar"
			/>
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="buyNow"
			/>
		</van-goods-action>
		<!-- 商品规格属数量性选择 -->
		<van-popup v-model="show" position='bottom'>
			<div class="chose-product-attr">
				<!-- 基本信息 -->
				<div class="popup-header f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<div class="basic-info">
						<h1>
							商品名称
						</h1>
						<div class="s-b">
							<p>￥<span class="red">1.00</span></p>
							<p>
								<i class="iconfont">&#xe609;</i>
								库存：1850
							</p>
						</div>
					</div>
				</div>
				<!-- 规格属性 -->
				<div class="attr">
					<h1>颜色</h1>
					<ul class='attr-list f-s'>
						<li>红色</li>
						<li>白色</li>
					</ul>
				</div>
				<div class="attr">
					<h1>尺寸</h1>
					<ul class='attr-list f-s'>
						<li>XL</li>
						<li>M</li>
					</ul>
				</div>
				<!-- 购买数量 -->
				<van-cell title="购买数量" >
					<van-stepper v-model="value" step="1" slot='right-icon'/>
				</van-cell>
				<!-- 底部按钮 -->
				<ul class="attr-btns">
					<li>加入购物车</li>
					<li @click="$router.push('/confirm-order')">立即购买</li>
				</ul>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import swiper from '@c/Swiper'
	export default {
		components: {
			swiper
		},
		data () {
			return {
				active : 0,
				show : true,
				value : 1
			}
		},
		methods :{
			//加入购物车
			joinShopCar () {
				this.show = true;
			},
			//立即购买
			buyNow () {
				this.show = true;
			}
		}
	}
</script>

<style>
</style>
