<template>
	<div class="reset-pwd page">
		<cl-header rightText='忘记密码?' @onClickRight='onClickRight'></cl-header>
		<van-cell-group>
			<van-field required label='原始密码' type='password' v-model="old_password" placeholder='请输入原始密码'></van-field>
			<van-field required label='新密码' type='password' v-model="password" placeholder='请输入新密码'></van-field>
			<van-field required label='确认密码' type='password' v-model="cur_password" placeholder='请再次输入新密码'></van-field>
		</van-cell-group>
		<cl-pri-btn @click.native='confirm'>确定重置</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				old_password : null,
				password : null,
				cur_password : null
			}
		},
		methods: {
			onClickRight () {
				this.$router.push('/forget-pwd')
			},
			confirm () {
				if (!this.password || !this.old_password || !this.cur_password) {
					this.utils.toast('请填写所有必填项信息');
					return;
				}
				if (this.password != this.cur_password) {
					this.utils.toast('两次输入的密码不一致，请重新输入');
					return;
				}
				this.http.post('/api/user/changePwd',{
					old_password :this.old_password,
					password : this.password
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.$router.back();
					})
				})
			}
		}
	}
</script>

<style>
</style>
