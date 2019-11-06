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
				<li v-for='(item, index) in imgs' :key='index' @click='itemClick'>
					<img src="../assets/img/2.jpg" alt="">
					<h1 class="product-name">商品名称商品名称商品名称</h1>
					<p class="s-b list-item-buttom">
						<span class="price">
							￥<a>12.00</a>
							<span class="market-price">100.00</span>
						</span>
						<span>
							送<a>5</a>%
						</span>
					</p>
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
			
		},
		data () {
			return {
				imgs : [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg',
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				]
			}
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
