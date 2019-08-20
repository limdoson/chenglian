<template>
	<ul class="order-tab s-b">
		<router-link tag='li' to='/user-order/0'>
			<img src="../assets/img/all-order.png" alt="">
			<p>全部订单</p>
		</router-link>
		<router-link tag='li' to='/user-order/1'>
			<img src="../assets/img/wait-pay.png" alt="">
			<p>待付款</p>
		</router-link>
		<router-link tag='li' to='/user-order/2'>
			<img src="../assets/img/delivery.png" alt="">
			<p>配送中</p>
		</router-link>
		<router-link tag='li' to='/user-order/3'>
			<img src="../assets/img/finish.png" alt="">
			<p>已完成</p>
		</router-link>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
