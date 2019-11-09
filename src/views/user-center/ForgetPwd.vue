<template>
	<div class="forget-pwd page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field required label='手机号码' type='number' v-model="telephone" placeholder='请输入手机号码'></van-field>
			<send-code :telephone='telephone' v-model="code" type='reset'></send-code>
			<van-field required label='新密码' type='password' v-model="password" placeholder='请输入新密码'></van-field>
		</van-cell-group>
		<cl-pri-btn @click.native='confirm'>确认重置</cl-pri-btn>
	</div>
</template>

<script>
	import sendCode from '@c/SendCode'
	export default {
		components: {sendCode},
		data () {
			return {
				telephone : null,
				code : null,
				password : null
			}
		},
		created () {
			
		},
		
		methods : {
			confirm () {
				if (!this.telephone || !this.code || !this.password) {
					this.utils.toast('请填写所有必填项信息');
					return;
				}
				if ( !(/^1[3456789]\d{9}$/.test(this.telephone)) ) {
					this.utils.toast('手机号码格式错误，请重新填写');
					return;
				}
				this.http.post('/api/user/resetPwd',{
					telephone :this.telephone,
					code : this.code,
					password : this.password
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.$router.replace('/user-center');
					})
				})
			}
		},
	}
</script>
