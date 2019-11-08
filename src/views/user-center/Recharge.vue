<template>
	<div class="recharge page">
		<cl-header rightText='充值记录' @onClickRight='toRechargLog'></cl-header>
		<cl-notice-title label='选择充值账户'></cl-notice-title>
		<van-radio-group v-model="record_type">
			<van-cell-group>
				<van-cell title="消费金充值" clickable >
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell title="余额宝" clickable >
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<cl-tips>
			消费金充值立送<span class="red">{{send_rate}}%</span>，最低充值金额为<span class="red">{{limit_money}}</span>元。
		</cl-tips>
		<cl-notice-title label='请填写充值金额'></cl-notice-title>
		<van-cell-group>
			<van-field v-model="money" type='number' placeholder="请输入充值金额" />
		</van-cell-group>
		<cl-pri-btn @click.native='confirm'>立即充值</cl-pri-btn>
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
				record_type : 1,
				money : null,
				//支付方式相关
				show_pay_type : false,//是否显示支付方式选择
				actions : [
					
				],
				limit_money : null,
				send_rate : null,
				client_type : 'other'
			}
		},
		created () {
			this.initData();
		},
		methods: {
			initData () {
				this.http.post('/api/user/rechargePage',{
					
				}).then(res => {
					this.limit_money = res.result.limit_money
					this.send_rate = res.result.send_rate
					this.client_type = res.result.client_type
					if (this.client_type == 'officialAccount') {
						this.actions.push({
							name : '微信支付',
							value :1
						})
					} else {
						this.actions.push({
							name : '支付宝支付',
							value :2
						})
					}
				})
			},
			toRechargLog () {
				this.$router.push('/recharge-log')
			},
			onSelect ({value}) {
				let me = this;
				this.http.post('/api/user/recharge',{
					pay_type : value,
					record_type : this.record_type,
					money : this.money
				}).then(res => {
					if (res.result.type == 'need_pay') {
						let pay_data = res.result.pay_data;
						//调起微信支付
						wx.chooseWXPay({
							timestamp : pay_data.timeStamp,
							appId : pay_data.appId,
							nonceStr : pay_data.nonceStr,
							package : pay_data.package,
							signType : pay_data.signType,
							paySign : pay_data.paySign,
							success : pay => {
								me.$router.replace('/pay-success')
							},
							fail : err => {
								alert(JSON.stringify(err))
							}
						})
					}
				})
			},
			confirm () {
				// console.log(this.money,this.limit_money)
				if (!this.money) {
					this.utils.toast('请填写充值金额');
					return;
				}
				if (Number(this.money) < Number(this.limit_money) ) {
					this.utils.toast('充值金额必须大于或等于最小充值金额');
					return;
				}
				this.show_pay_type = true;
			}
		}
	}
</script>

<style>
</style>
