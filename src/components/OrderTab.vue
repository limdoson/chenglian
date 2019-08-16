<template>
	<ul class="order-tab s-b">
		<li >
			<img src="../assets/img/all-order.png" alt="">
			<p>全部订单</p>
		</li>
		<li >
			<img src="../assets/img/wait-pay.png" alt="">
			<p>待付款</p>
		</li>
		<li >
			<img src="../assets/img/delivery.png" alt="">
			<p>配送中</p>
		</li>
		<li >
			<img src="../assets/img/finish.png" alt="">
			<p>已完成</p>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				tab_option : [
					{
						img : '../assets/img/all-order.png',
						title : '全部订单'
					},{
						img : '',
						title : '全部订单'
					},{
						img : '',
						title : '全部订单'
					},{
						img : '',
						title : '全部订单'
					}
				]
			}
		},
		methods: {
			tabClick() {
				
			}
		}
	}
</script>

<style>
</style>
