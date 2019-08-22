<template>
	<div class="bind page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field label='真实姓名' placeholder='请输入真实姓名'></van-field>
			<van-field label='手机号码' type='number' placeholder='请输入手机号码'></van-field>
			<van-field label='验证码' type='number' placeholder='请输入验证码'>
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
			<van-field label='设置密码' v-model='password' type='password' placeholder='请设置6位数字密码'></van-field>
		</van-cell-group>
		<cl-tips>
			该密码将作为您在系统中的登录密码以及支付密码使用，请妥善保存；
		</cl-tips>
		<cl-pri-btn @click.native='confirm'>保存信息</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				password  : null
			}
		},
		created () {
			
		},
		
		methods : {
			confirm () {
				if (this.password.length != 6 || !/^[0-9]*$/.test(this.password) ) {
					this.utils.msg('请设置6位数字密码');
					return;
				}
				
			}
		},
	}
</script>
