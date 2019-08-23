<template>
	<div class="distribution">
		<header class="f-s s-b">
			<div class="f-s">
				<img src="../assets/img/logo.jpg" alt="" class="crown">
				<div>
					<h1>用户姓名（昵称）</h1>
					<p>
						<span>普通用户</span>
					</p>
				</div>
			</div>
			<img src="../assets/img/medal.png" alt="" class="medal">
		</header>
		<ul class="cell-menu">
			<router-link tag='li' to='/team/0' class='s-b'>
				<h1>旗下会员</h1>
				<p class="f-s">
					<span class="red">1人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/team/1' class='s-b'>
				<h1>旗下推广会员</h1>
				<p class="f-s">
					<span class="red">1人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/team/2' class='s-b'>
				<h1>旗下商家会员</h1>
				<p class="f-s">
					<span class="red">1人</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/profit-logs' class='s-b'>
				<h1>我的收益</h1>
				<p class="f-s">
					<span class="red">￥1.00</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/cash-withdrawal' class='s-b'>
				<h1>可提现余额</h1>
				<p class="f-s">
					<span class="red">￥1.00</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
			<router-link tag='li' to='/profit-rank' class='s-b'>
				<h1>团队销量排行</h1>
				<p class="f-s">
					<span>查看</span>
					<i class="iconfont">&#xe7f9;</i>
				</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
