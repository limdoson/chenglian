<template>
	<div class="user-order page">
		<cl-header></cl-header>
		<van-tabs v-model="active" class='tab'>
			<van-tab title="全部"></van-tab>
			<van-tab title="待付款"></van-tab>
			<van-tab title="配送中"></van-tab>
			<van-tab title="已完成"></van-tab>
		</van-tabs>
		<cl-list>
			<ul class="order-list" slot='list'>
				<li >
					<div class="order-no s-b">
						<span>订单号：1111111</span>
						<span class="red">待付款</span>
					</div>
					<div class="f-s">
						<img src="../../assets/img/2.jpg" alt="">
						<div class="order-info">
							<h1>商品名称</h1>
							<p class="attr f-s">
								<span>规格1</span>
								<span>规格2</span>
								<span>规格3</span>
							</p>
							<p class="s-b">
								<span class="red">￥1.00</span>
								<span>*10</span>
								<span>合计：<span class="red">10.00</span></span>
							</p>
						</div>
					</div>
					<h1 class='s-b time'>
						<span>2018-08-08 18-08-08</span>
						<p>
							<van-button type="primary" size="small">取消订单</van-button>
							<van-button type="primary" size="small">支付订单</van-button>
						</p>
					</h1>
				</li>
				<li >
					<div class="order-no s-b">
						<span>订单号：1111111</span>
						<span class="red">配送中</span>
					</div>
					<div class="f-s">
						<img src="../../assets/img/2.jpg" alt="">
						<div class="order-info">
							<h1>商品名称</h1>
							<p class="attr f-s">
								<span>规格1</span>
								<span>规格2</span>
								<span>规格3</span>
							</p>
							<p class="s-b">
								<span class="red">￥1.00</span>
								<span>*10</span>
								<span>合计：<span class="red">10.00</span></span>
							</p>
						</div>
					</div>
					<h1 class='s-b time'>
						<span>2018-08-08 18-08-08</span>
						<p>
							<van-button type="primary" size="small">查看物流</van-button>
							<van-button type="primary" size="small">确认收货</van-button>
						</p>
					</h1>
				</li>
				<li >
					<div class="order-no s-b">
						<span>订单号：1111111</span>
						<span class="red">已完成</span>
					</div>
					<div class="f-s">
						<img src="../../assets/img/2.jpg" alt="">
						<div class="order-info">
							<h1>商品名称</h1>
							<p class="attr f-s">
								<span>规格1</span>
								<span>规格2</span>
								<span>规格3</span>
							</p>
							<p class="s-b">
								<span class="red">￥1.00</span>
								<span>*10</span>
								<span>合计：<span class="red">10.00</span></span>
							</p>
						</div>
					</div>
					<h1 class='s-b time'>
						<span>2018-08-08 18-08-08</span>
						<p>
							<van-button type="primary" size="small">再次购买</van-button>
							<van-button type="primary" size="small">评价商品</van-button>
						</p>
					</h1>
				</li>
			</ul>
		</cl-list>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		activated () {
			if (this.$route.params.flag) {
				this.active = this.$route.params.flag
			}
		}
	}
</script>

<style>
</style>
