<template>
	<div class="user-center">
		<header>
			<div class="s-b">
				<div class="f-s">
					<img :src="avatar" alt="">
					<h1>
						<p>{{telephone}}-{{real_name ? real_name : nickname}}</p>
						<p>编号：{{id}}</p>
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
				<p>￥<span>{{consume_account}}</span></p>
			</router-link>
			<router-link tag='li' to='/cash-balance'>
				<h1>
					现金余额
				</h1>
				<p>￥<span>1{{balance_money}}</span></p>
			</router-link>
			<router-link tag='li' to='/cash-withdrawal'>
				<h1>
					提现余额
				</h1>
				<p>￥<span>{{remain_income}}</span></p>
			</router-link>
			<router-link tag='li' to='/cash-withdrawal'>
				<h1>
					补点余额
				</h1>
				<p>￥<span>{{return_remain_money}}</span></p>
			</router-link>
		</ul>
		<!-- 公告 -->
		<router-link tag='marquee' class='notice' behavior="" direction="left" style="margin-top: 8px;" to='/article-detail'>{{notice}}</router-link>
		<!-- <marquee ></marquee> -->
		
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
			<router-link tag='li' to='/my-shop'>
				<img src="../assets/img/shop.png" alt="">
				<p>我的店铺</p>
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
			<li @click="logout">
				<img src="../assets/img/logout.png" alt="">
				<p>退出登录</p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import orderTab from '@c/OrderTab'
	export default {
		components: {orderTab},
		data () {
			return {
				id : null,
				nickname : null,
				avatar : null,
				telephone : null,
				real_name : null,
				consume_account : null,
				balance_money : null,
				remain_income : null,
				return_remain_money : null,
				shop : {//不是商家返回null
					is_audit : null,//1为审核通过,0为未通过
					id : null,
				},
				notice : null
			}
		},
		created () {
			this.initData()
		},
		methods : {
			initData () {
				this.http.post('/api/user/index',{
					
				}).then(res => {
					this.id = res.result.user.id;
					this.nickname = res.result.user.nickname;
					this.avatar = res.result.user.avatar;
					this.telephone = res.result.user.telephone;
					this.real_name = res.result.user.real_name;
					this.consume_account = res.result.user.consume_account;
					this.balance_money = res.result.user.balance_money;
					this.remain_income = res.result.user.remain_income;
					this.return_remain_money = res.result.user.return_remain_money;
					this.shop = res.result.shop;
					this.notice = res.result.notice;
				})
			},
			logout () {
				this.http.post('/api/user/logout',{
					
				}).then(res =>{
					this.utils.toast('退出成功')
				})
			}
		}
	}
</script>

<style>
</style>
