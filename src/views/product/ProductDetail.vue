<template>
	<div class="product-detail">
		<cl-header></cl-header>
		<swiper></swiper>
		<!-- 商品信息 -->
		
		<!-- 底部导航菜单 -->
		<van-goods-action>
			<van-goods-action-icon
				icon="chat-o"
				text="客服"
				@click="onClickIcon"
			/>
			<van-goods-action-icon
				icon="cart-o"
				text="购物车"
				@click="onClickIcon"
			/>
			<van-goods-action-button
				type="warning"
				text="加入购物车"
				@click="onClickButton"
			/>
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="onClickButton"
			/>
		</van-goods-action>
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
				
			}
		}
	}
</script>

<style>
</style>
