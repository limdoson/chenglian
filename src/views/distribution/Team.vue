<template>
	<div class="team page">
		<cl-header></cl-header>
		<van-tabs v-model="active">
			<van-tab title="全部会员"></van-tab>
			<van-tab title="推广会员"></van-tab>
			<van-tab title="商家会员"></van-tab>
		</van-tabs>
		<cl-list>
			<ul class="member-list" slot='list'>
				<li class="f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<div>
						<h1>用户姓名（昵称）</h1>
						<p class="s-b">
							<span>注册于：2018-08-08 08-08</span>
							<span class="red">普通会员</span>
						</p>
					</div>
				</li>
				<li class="f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<div>
						<h1>用户姓名（昵称）</h1>
						<p class="s-b">
							<span>注册于：2018-08-08 08-08</span>
							<span class="red">推广会员</span>
						</p>
					</div>
				</li>
				<li class="f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<div>
						<h1>用户姓名（昵称）</h1>
						<p class="s-b">
							<span>注册于：2018-08-08 08-08</span>
							<span class="red">商家会员</span>
						</p>
					</div>
				</li>
			</ul>
		</cl-list>
	</div>
	
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				active : this.$route.flag
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
