<template>
	<van-list
		class='cl-list'
		v-model="loading"
		:finished="finished"
		finished-text="没有更多了"
		@load="onLoad">
		<ul class="list f-s two-item">
			<li v-for='item in product' :key='item.id'  @click='toProductDetail(item)'>
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
</template>

<script>
	export default {
		props : {
			apiUrl : {
				default : '/api/mall/home'
			}
		},
		data () {
			return {
				loading  : false,
				finished : false,
				page : 1,
				limit : 10,
				product : null,
			}
		},
		created () {
			// console.log(this.url)
		},
		activated() {
			
		},
		methods: {
			onLoad () {
				this.http.post(this.apiUrl,{
					page : this.page,
					limit :this.limit,
					id :this.$route.params.id ? this.$route.params.id : null
				}).then(res => {
					let list = res.result.product;
					
					if (list.length > 0) {
						if (this.page == 1) {
							this.product = list
						} else {
							this.product = this.product.concat(list)
						}
						this.page ++ 
					} else {
						this.finished = true
					}
					
					
					this.loading = false;
				})
			},
			toProductDetail (item) {
				this.$router.push(`/product-detail/${item.id}`)
			}
		}
	}
</script>

<style scoped lang='less'>
	.two-item {
		flex-wrap: wrap;
		li {
			width: 40%;
			background: #fff;
		}
	}
</style>
