<template>
	<div class="reset-pwd page">
		<cl-header rightText='忘记密码?' @onClickRight='onClickRight'></cl-header>
		<van-cell-group>
			<van-field required label='原始密码' type='password' placeholder='请输入原始密码'></van-field>
			<van-field required label='新密码' type='password' placeholder='请输入新密码'></van-field>
			<van-field required label='确认密码' type='password' placeholder='请再次输入新密码'></van-field>
		</van-cell-group>
		<cl-pri-btn>确定重置</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			onClickRight () {
				this.$router.push('/forget-pwd')
			}
		}
	}
</script>

<style>
</style>
