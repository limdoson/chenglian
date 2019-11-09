<template>
	<div class="bind-user-info page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field v-model='real_name' required label='真实姓名' placeholder='请输入收货人姓名'></van-field>
			<van-field v-model='telephone' type='number' required label='电话' placeholder='请输入手机号码'></van-field>
			<send-code v-model='code' :telephone='telephone'></send-code>
			<van-field v-model='password' type='password' required label='密码' placeholder='设置登录/支付密码'></van-field>
		</van-cell-group>
		<cl-pri-btn @click.native='confirm'>完成验证</cl-pri-btn>
	</div>
</template>

<script>
	import sendCode from '@c/SendCode'
	export default {
		components: {sendCode},
		data () {
			return {
				real_name : null,
				telephone : null,
				code : null,
				password : null
			}
		},
		created () {
			
		},
		
		methods : {
			confirm () {
				if (!this.real_name) {
					this.utils.toast('请填写真实姓名');
					return;
				}
				if (!this.telephone) {
					this.utils.toast('请填写手机号码');
					return;
				}
				if ( !(/^1[3456789]\d{9}$/.test(this.telephone)) ) {
					this.utils.toast('手机号码格式错误，请重新填写');
					return;
				}
				if (!this.code) {
					this.utils.toast('请填写收到的验证码');
					return;
				}
				if (!this.password || this.password == '') {
					this.utils.toast('请填写密码');
					return;
				}
				if (this.password.length < 6 ) {
					this.utils.toast('密码最少为6位数');
					return;
				}
				this.http.post('/api/user/bind',{
					real_name : this.real_name,
					telephone : this.telephone,
					code : this.code,
					password :this.password
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.$router.back();
					})
				})
			}
		},
	}
</script>
