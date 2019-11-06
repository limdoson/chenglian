<template>
	<div class='cl-list'>
		<slot name='header'>
			<header class='f-s' v-if='title'>
				<img src="../assets/img/product.png" alt="">
				{{title}}
			</header>
		</slot>
		<slot name='list'>
			<ul class="list f-s">
				<li v-for='(item, index) in list' :key='index' @click='itemClick'>
					<img :src="item.shop_logo" alt="">
					<h1 class="product-name">{{item.shop_name}}</h1>
					<template v-if="type == 'product'">
						<p class="s-b list-item-buttom">
							<span class="price">
								￥<a>12.00</a>
								<span class="market-price">100.00</span>
							</span>
							<span>
								送<a>5</a>%
							</span>
						</p>
					</template>
				</li>
				<!-- <router-link tag='li' to='/product-detail' v-for='(item, index) in imgs' :key='index'>
					
				</router-link> -->
			</ul>
		</slot>
		
	</div>
</template>

<script>
	export default {
		props : {
			//标题
			title : {
				type : String,
				default : null,
			},
			list :{
				default : null
			},
			link : {
				default : '/product-detail'
			},
			type :{
				default : 'product'
			}
		},
		data () {
			return {
				
			}
		},
		created () {
			console.log(this.list)
		},
		methods: {
			itemClick () {
				this.$router.push('/product-detail')
			}
		}
	}
</script>

<style>
</style>
