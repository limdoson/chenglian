<template>
	<div class="user-info page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-cell title="用户编号" :value="id" />
			<van-cell title="推荐人" :value="parent_id" />
			<van-cell title="昵称" :value="nickname" />
			<van-cell title="真实姓名" :value="real_name" />
			<van-cell title="电话" :value="teltephone" />
		<!-- 	<van-cell title="消费总额" value="内容" />
			<van-cell title="账户余额" value="内容" />
			<van-cell title="消费金余额" value="内容" />
			<van-cell title="提现总额" value="内容" /> -->
			<van-cell title="注册时间" :value="created_at" />
		</van-cell-group>
	</div>
</template>

<script>
	export default {
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
				parent_id : null,
				created_at : null,
			}
		},
		created () {
			this.initData();
		},
		methods :{
			initData () {
				this.http.post('/api/user/info',{
					
				}).then(res => {
					this.id = res.result.id;
					this.nickname = res.result.nickname;
					this.avatar = res.result.avatar;
					this.telephone = res.result.telephone;
					this.real_name = res.result.real_name;
					this.consume_account = res.result.consume_account;
					this.balance_money = res.result.balance_money;
					this.remain_income = res.result.remain_income;
					this.return_remain_money = res.result.return_remain_money;
					this.parent_id = res.result.parent_id;
					this.created_at = res.result.created_at;
				})
			}
		}
	}
</script>

<style>
</style>
