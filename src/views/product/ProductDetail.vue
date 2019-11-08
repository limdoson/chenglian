<template>
	<div class="product-detail">
		<cl-header ></cl-header>
		<van-swipe :autoplay='2000'  indicator-color="white" >
			<van-swipe-item v-for='item in slide' :key='item'>
				<img :src="item" alt="">
			</van-swipe-item>
		</van-swipe>
		<!-- 商品信息 -->
		<div class="product-info">
			<h1>{{title}}</h1>
			<p>{{descript}}</p>
			<p>
				￥<span class="red">{{member_price}}</span>
				<span class="market-price">{{market_price}}</span>
			</p>
			<dl class="s-b">
				<dt>
					<i class="iconfont">&#xe88e;</i>
					已售：1000
				</dt>
				<dt>
					<i class="iconfont">&#xe609;</i>
					库存：{{stock_number}}
				</dt>
			</dl>
			<router-link class="shop-name f-s" tag='h1' :to='`/shop-detail/${shop_id}`'>
				<i class="iconfont">&#xe79f;</i>
				{{shop_name}}
			</router-link>
		</div>
		<!-- 图文详情与评价 -->
		<div class="details" v-html='content'>
			
		</div>
		<!-- <div class="detail-and-comments">
			<van-tabs v-model="active">
				<van-tab title="商品详情">
					
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
		</div> -->
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
		<!-- <van-popup v-model="show" position='bottom'>
			<div class="chose-product-attr">
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
				<van-cell title="购买数量" >
					<van-stepper v-model="value" step="1" slot='right-icon'/>
				</van-cell>
				<ul class="attr-btns">
					<li>加入购物车</li>
					<li @click="$router.push('/confirm-order')">立即购买</li>
				</ul>
			</div>
		</van-popup> -->
		<van-popup v-model='show_chose_number' position='bottom'>
			<div class="s-b" style='background: #fff;padding : 20px;'>
				<span>选择购买数量</span>
				<van-stepper button-size='20' v-model="number" />
			</div>
			<cl-pri-btn @click.native='confirmBuyDirect'>确认购买</cl-pri-btn>
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
				slide : null,//商品轮播图
				title : null,//名称
				descript : null,//描述
				market_price : null,//市场价
				member_price : null,//会员价
				stock_number : null,//库存
				shop_id : null,//商家id
				shop_name : null,//商家名称
				content : null,//详情内容
				active : 0,
				show : false,
				value : 1,
				show_chose_number : false,
				number : 1
			}
		},
		created (){
			this.http.post('/api/product/detail',{
				id : this.$route.params.id,
			}).then(res =>{
				
				this.slide = res.result.slide;
				this.title = res.result.title;
				this.descript = res.result.descript;
				
				this.market_price = res.result.market_price;
				this.member_price = res.result.member_price;
				this.stock_number = res.result.stock_number;
				this.shop_id = res.result.shop_id;
				this.shop_name = res.result.shop_name;
				this.content = res.result.content;
			})
		},
		methods :{
			//加入购物车
			joinShopCar () {
				// this.show = true;
				this.http.post('/api/cart/create',{
					id :this.$route.params.id,
					property_id : 0,
					number :1,
					shop_id : this.shop_id
				}).then(res => {
					this.utils.msg('添加成功')
				})
			},
			buyNow () {
				this.show_chose_number = true
			},
			//立即购买
			confirmBuyDirect () {
				let select_info = [
					{
						id : this.$route.params.id,
						number : this.number,
						property_id : 0,
						shop_id : this.shop_id
					}
				]
				localStorage.setItem('select_info',JSON.stringify(select_info));
				this.$router.push('/confirm-order')
			}
		}
	}
</script>

<style>
</style>
