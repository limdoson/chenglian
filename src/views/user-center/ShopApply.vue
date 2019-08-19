<template>
	<div class="shop-apply page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field
				v-model="mobile"
				required
				clearable
				label="手机号码"
				placeholder="请输入手机号码"
			  />
			<van-field
				v-model="mobile"
				type="password"
				label="密码"
				placeholder="请设置登录密码"
				required
			/>
			<van-field
				v-model="mobile"
				center
				type='number'
				clearable
				require
				label="验证码"
				placeholder="请输入短信验证码">
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
			<van-field
				v-model="mobile"
				type="text"
				label="店铺名称"
				placeholder="请输入店铺名称"
				required
			/>
			<van-field
				v-model="mobile"
				type="text"
				label="店铺地址"
				placeholder="请输入店铺地址"
				required
			/>
			<van-field
				v-model="mobile"
				type="number"
				label="供货折扣"
				placeholder="请输入店铺名称"
				required
			/>
			<van-field
				v-model="mobile"
				type="text"
				label="真实姓名"
				placeholder="请填写真实姓名"
				required
			/>
			<div class="f-s upload">
				<span class="label"><span class="red">*</span>营业执照</span>
				<van-uploader :after-read="upload" />
			</div>
			
		</van-cell-group>
		<cl-pri-btn >提交申请</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				mobile : null,
			}
		},
		methods : {
			upload (file) {
				console.log(file)
			}
		}
	}
</script>

<style>
</style>
