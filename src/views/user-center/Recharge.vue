<template>
	<div class="recharge page">
		<cl-header rightText='充值记录' @onClickRight='toRechargLog'></cl-header>
		<cl-notice-title label='选择充值账户'></cl-notice-title>
		<van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell title="现金余额充值" clickable @click="radio = 1">
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell title="消费金充值" clickable @click="radio = 2">
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<cl-tips>
			消费金充值立送<span class="red">20%</span>，最低充值金额为<span class="red">500</span>元。
		</cl-tips>
		<cl-notice-title label='请填写充值金额'></cl-notice-title>
		<van-cell-group>
			<van-field v-model="value" type='number' placeholder="请输入充值金额" />
		</van-cell-group>
		<cl-pri-btn >立即充值</cl-pri-btn>
		<van-action-sheet
			v-model="show_pay_type"
			:actions="actions"
			@select="onSelect"
			cancel-text="取消"
		/>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				radio : 1,
				value : null,
				//支付方式相关
				show_pay_type : true,//是否显示支付方式选择
				actions : [
					{
						name : '微信支付',
						value : 1
					},{
						name : '支付宝支付',
						value : 2
					}
				]
			}
		},
		methods: {
			toRechargLog () {
				this.$router.push('/recharge-log')
			},
			onSelect () {
				
			}
		}
	}
</script>

<style>
</style>
