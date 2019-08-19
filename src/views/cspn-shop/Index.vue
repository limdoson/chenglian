<template>
	<div class="cspn-shop page">
		<cl-header></cl-header>
		<van-tabs v-model="active" title-active-color='#09bb07'>
			<van-tab title="消费金推荐商品">
				<cl-list></cl-list>
			</van-tab>
			<van-tab title="消费金推荐商家">
				<cl-list>
					<ul class="shop-list" slot='list'>
						<router-link tag='li' to='/shop-detail' v-for='(item, index) in 6' :key='index' class='f-s'>
							<img src="../../assets/img/2.jpg">
							<div>
								<h1>店铺名称</h1>
								<p>地址</p>
								<p class='distance'>距离<span class="red">1.2公里</span></p>
							</div>
						</router-link>
					</ul>
				</cl-list>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		created () {
			
		},
		activated () {
			console.log(this)
			this.utils.msg('使用消费金支付将不再赠送')
		},
	}
</script>

<style>
</style>
