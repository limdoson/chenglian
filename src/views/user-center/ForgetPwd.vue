<template>
	<div class="forget-pwd page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field required label='手机号码' type='password' placeholder='请输入手机号码'></van-field>
			<van-field required label='验证码' type='password' placeholder='请输入验证码'>
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
			<van-field required label='新密码' type='password' placeholder='请输入新密码'></van-field>
			<van-field required label='确认密码' type='password' placeholder='请再次输入新密码'></van-field>
		</van-cell-group>
		<cl-pri-btn>确认重置</cl-pri-btn>
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
