<template>
	<div class="cash-withdrawal page">
		<cl-header rightText='提现记录' @onClickRight='clickRight'></cl-header>
		<cl-notice-title label='选择出款账户'></cl-notice-title>
		<van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell title="提现余额：100.00" clickable @click="radio = 1">
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell title="现金余额：0.00" clickable @click="radio = 2">
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<cl-notice-title label='选择到账账户'></cl-notice-title>
		<van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell title="现金到账" clickable @click="radio = 1">
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell title="提现到现金余额" clickable @click="radio = 2">
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<cl-notice-title label='填写提现金额'></cl-notice-title>
		<van-cell-group>
			<van-field
				v-model="money"
				label="提现金额"
				type="number"
				placeholder="请填写提现金额"
			/>
		</van-cell-group>
		<cl-pri-btn>立即提现</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				radio :1,
				money : null
			}
		},
		created () {
			
		},
		
		methods : {
			clickRight () {
				
			}
		},
	}
</script>
