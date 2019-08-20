<template>
	<div class="cash-setting page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field label='账户类型' v-model="value" placeholder="选择账户类型" readonly @click='show = true'/>
			<van-field label='账号' v-model="value" placeholder="请填写账号"/>
			<van-field label='真实姓名' v-model="value" placeholder="请填写真实姓名"/>
			<van-field label='手机号码' v-model="value" placeholder="请填写手机号码"/>
			<van-field
			    v-model="value"
			    center
			    clearable
			    label="短信验证码"
			    placeholder="请输入短信验证码">
			    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
		</van-cell-group>
		<cl-pri-btn>保存设置</cl-pri-btn>
		<!-- 到户类型 -->
		<van-action-sheet
			v-model="show"
			:actions="actions"
			@select="onSelect"
		/>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				value : null,
				show : false,
				actions :[
					{name : '微信'},{ name : '支付宝' }
				]
			}
		},
		created () {
			
		},
		
		methods : {
			showMenu () {
				
			},
			onSelect (item) {
				this.show = false;
				this.value = item.name
			}
		},
	}
</script>
