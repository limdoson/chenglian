<template>
	<div class="distribution">
		<header class="f-s s-b">
			<div class="f-s">
				<img :src="avatar" alt="" class="crown">
				<div>
					<h1>{{real_name}}（{{nickname}}）</h1>
					<p>
						<span>{{user_level}}</span>
					</p>
				</div>
			</div>
			<img src="../assets/img/medal.png" alt="" class="medal">
		</header>
		<ul class="cell-menu">
			<router-link tag='li' to='/team?flag=subUser' class='s-b'>
				<h1>旗下会员</h1>
				<p class="f-s">
					<span class="red">{{sub_user_number}}人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/team?flag=subPromote' class='s-b'>
				<h1>旗下推广会员</h1>
				<p class="f-s">
					<span class="red">{{sub_promote_number}}人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/team?flag=subShop' class='s-b'>
				<h1>旗下商家会员</h1>
				<p class="f-s">
					<span class="red">{{sub_shop_number}}人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/profit-logs' class='s-b'>
				<h1>我的收益</h1>
				<p class="f-s">
					<span class="red">￥{{total_income}}</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/cash-withdrawal' class='s-b'>
				<h1>可提现余额</h1>
				<p class="f-s">
					<span class="red">￥{{remain_income}}</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<!-- <router-link tag='li' to='/profit-rank' class='s-b'>
				<h1>团队销量排行</h1>
				<p class="f-s">
					<span>查看</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link> -->
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				avatar : null,
				telephone : null,
				real_name :null,
				nickname : null,
				total_income : null,
				remain_income :null,
				is_promote : null,
				sub_user_number : null,
				sub_promote_number : null,
				sub_shop_number : null,
				user_level : null
			}
		},
		created () {
			this.http.post('/api/user/distribute',{
				
			}).then(res => {
				this.avatar = res.result.avatar
				this.telephone = res.result.telephone
				this.real_name = res.result.real_name
				this.nickname = res.result.nickname
				this.total_income = res.result.total_income
				this.remain_income = res.result.remain_income
				this.is_promote = res.result.is_promote
				this.sub_user_number = res.result.sub_user_number
				this.sub_promote_number = res.result.sub_promote_number
				this.sub_shop_number = res.result.sub_shop_number
				this.user_level = res.result.user_level
			})
		},
		
		methods : {
			
		},
	}
</script>
