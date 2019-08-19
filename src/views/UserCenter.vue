<template>
	<div class="user-center">
		<header>
			<div class="s-b">
				<div class="f-s">
					<img src="../assets/img/2.jpg" alt="">
					<h1>
						<p>15960209969-林杜森</p>
						<p>编号：1</p>
					</h1>
				</div>
				<router-link tag='i' class='iconfont' to='/user-info'>&#xe7f9;</router-link>
			</div>
		</header>
		<!-- 账户信息 -->
		<ul class="account-info s-b">
			<router-link tag='li' to='/cspn-shop'>
				<h1>
					消费金账户
				</h1>
				<p>￥<span>1.00</span></p>
			</router-link>
			<router-link tag='li' to=''>
				<h1>
					现金余额
				</h1>
				<p>￥<span>1.00</span></p>
			</router-link>
			<router-link tag='li' to=''>
				<h1>
					提现余额
				</h1>
				<p>￥<span>1.00</span></p>
			</router-link>
			<router-link tag='li' to=''>
				<h1>
					补点余额
				</h1>
				<p>￥<span>1.00</span></p>
			</router-link>
		</ul>
		<!-- 公告 -->
		<marquee class='notice' behavior="" direction="left" style="margin-top: 8px;">会员中心公告</marquee>
		
		<!-- 订单tab -->
		<order-tab style='margin-top: 6px;'></order-tab>
		<!-- 菜单 -->
		<ul class="img-menu f-s">
			<router-link tag='li' to='/recharge'>
				<img src="../assets/img/chongzhi.png" alt="">
				<p>充值</p>
			</router-link>
			<router-link tag='li' to='/share-qr-code'>
				<img src="../assets/img/qrcode.png" alt="">
				<p>推广会员</p>
			</router-link>
			<router-link tag='li' to='/share-qr-code'>
				<img src="../assets/img/join-shop.png" alt="">
				<p>推广商家</p>
			</router-link>
			<router-link tag='li' to='/shop-apply'>
				<img src="../assets/img/shop.png" alt="">
				<p>我要开店</p>
			</router-link>
			<router-link tag='li' to='/adr-list'>
				<img src="../assets/img/address.png" alt="">
				<p>地址管理</p>
			</router-link>
			<router-link tag='li' to='/budget-detail'>
				<img src="../assets/img/shouzhimingxi.png" alt="">
				<p>收支明细</p>
			</router-link>
			<router-link tag='li' to='/reset-pwd'>
				<img src="../assets/img/pwd.png" alt="">
				<p>修改密码</p>
			</router-link>
			<router-link tag='li' to=''>
				<img src="../assets/img/logout.png" alt="">
				<p>退出登录</p>
			</router-link>
		</ul>
		
	</div>
</template>

<script>
	import orderTab from '@c/OrderTab'
	export default {
		components: {orderTab},
		data () {
			return {
				
			}
		}
	}
</script>

<style>
</style>
