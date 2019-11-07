<template>
	<div class="page">
		<cl-header></cl-header>
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
	</div>
</template>
<script>
	export default {
		data () {
			return {
				loading : false,
				finished :false,
				page :1,
				limit : 10,
				product: null,
			}
		},
		created () {},
		methods : {
			onLoad () {
				this.http.post('/api/product/list',{
					page : this.page,
					limit :this.limit,
					type : 'other',
					sec_type :this.$route.params.id
				}).then(res => {
					let list = res.result;
					
					if (list.length > 0) {
						if (this.page == 1) {
							this.product = list
						} else {
							this.product = this.product.concat(list)
						}
						this.page ++ 
					} else {
						this.loading = false;
						this.finished = true
					}
					
					
					this.loading = false;
				})
			}
		}
	}
</script>
