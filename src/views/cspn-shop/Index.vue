<template>
	<div class="cspn-shop page">
		<cl-header></cl-header>
		<van-tabs v-model="active" title-active-color='#09bb07' class="tabs" @click='tabClick'>
			<van-tab title="消费金推荐商品">
				
			</van-tab>
			<van-tab title="消费金推荐商家">
				
			</van-tab>
		</van-tabs>
		<van-list
			v-show='active == 0'
			class='cl-list'
			v-model="product_loading"
			:finished="product_finished"
			finished-text="没有更多了"
			@load="productOnLoad">
			<ul class="list f-s two-item">
				<li v-for='item in product_list' :key='item.id'  @click='toProductDetail(item)'>
					<img :src="item.img_url" alt="">
					<h1 class="product-name">{{item.shop_name}}</h1>
					<p class="s-b list-item-buttom">
						<span class="price">
							￥<a>{{item.member_price}}</a>
							<span class="market-price">{{item.market_price}}</span>
						</span>
						<span>
							送<a>{{item.send_rate}}</a>%
						</span>
					</p>
				</li>
			</ul>
		</van-list>
		<van-list
			v-show='active == 1'
			class='cl-list'
			v-model="shop_loading"
			:finished="shop_finished"
			finished-text="没有更多了"
			@load="shopOnLoad">
			<ul class="list f-s two-item">
				<li v-for='item in shop_list' :key='item.id'  @click='toProductDetail(item)'>
					<img :src="item.shop_logo" alt="">
					<h1 class="product-name">{{item.shop_name}}</h1>
					<!-- <p class="s-b list-item-buttom" style="color: #ccc;font-size: 12px;">
						{{item.province}}{{item.city}}{{item.district}}{{item.address}}
					</p> -->
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active : 0,
				product_list : null,
				product_page :1,
				product_limit : 20,
				product_loading : false,
				product_finished : false,
				
				shop_list : null,
				shop_page :1,
				shop_limit : 20,
				shop_loading : false,
				shop_finished : false,
			}
		},
		created () {
			this.utils.msg('使用消费金支付将不再赠送')
		},
		activated () {
			
		},
		methods: {
			productOnLoad () {
				this.http.post('/api/product/list', {
					page : this.product_page,
					limit : this.product_limit,
					type : 'consume'
				}).then(res => {
					let list = res.result;
					
					if (list.length > 0) {
						if (this.product_page == 1) {
							this.product_list = list
						} else {
							this.product_list = this.product_list.concat(list)
						}
						this.product_page ++ 
					} else {
						if (this.product_page == 1) {
							this.product_list = list;
						}
						this.product_loading = false;
						this.product_finished = true
					}
					
					
					this.product_loading = false;
				})
			},
			shopOnLoad () {
				this.http.post('/api/shop/consume', {
					page : this.shop_page,
					limit : this.shop_limit,
					type : 'consume'
				}).then(res => {
					let list = res.result;
					
					if (list.length > 0) {
						if (this.shop_page == 1) {
							this.shop_list = list
						} else {
							this.shop_list = this.shop_list.concat(list)
						}
						this.shop_page ++ 
					} else {
						if (this.shop_page == 1) {
							this.shop_list = list;
						}
						this.shop_loading = false;
						this.shop_finished = true
					}
					
					
					this.shop_loading = false;
				})
			},
			tabClick () {
				if (this.active == 0) {
					this.product_page = 1;
					this.product_list = null;
					this.productOnLoad()
				} else {
					this.shop_page = 1;
					this.shop_list = null;
					this.shopOnLoad()
				}
			},
			toProductDetail (item) {
				this.$router.push(`/product-detail/${item.id}`)
			}
		},
	}
</script>

<style scoped lang='less'>
	.cspn-shop {
		padding-top: 90px;
		.tabs {
			
			position: fixed;
			top : 46px;
			z-index: 111;
			width: 100%;
		}
	}
</style>
