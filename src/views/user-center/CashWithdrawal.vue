<template>
	<div class="cash-withdrawal page">
		<cl-header rightText='提现记录' @onClickRight='clickRight'></cl-header>
		<cl-tips>
			提示：单笔最小金额额度：<span class="red">{{config.withdraw_min_limit}}</span>元，单笔最大提现额度：<span class="red">{{config.withdraw_max_limit}}</span>元；每笔提现手续费：<span class="red">{{config.withdraw_rate}}</span>元，提现到账时间：<span class="red">{{config.withdraw_to_account}}</span>天，若支付宝提现，单笔最小提现额为<span class="red">{{config.withdraw_alipay_limit}}</span>元，微信单笔最大提现额：<span class="red">{{config.withdraw_wechat_limit}}</span>元；信用卡提现<span class="red">{{config.withdraw_to_credit}}</span>天到账。
		</cl-tips>
		<cl-notice-title label='选择出款账户'></cl-notice-title>
		<van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell :title="`提现余额：${info.remain_income}`" clickable @click="radio = 1">
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell :title="`现金余额：${info.balance_money}`" clickable @click="radio = 2">
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
				<van-cell :title="`补点余额：${info.return_remain_money}`" clickable @click="radio = 3">
					<van-radio slot="right-icon" :name="3" checked-color="#07c160" />
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
		<cl-pri-btn @click.native='confirm'>立即提现</cl-pri-btn>
		<cl-pri-btn @click.native="$router.push('/cash-setting')">提现账户设置</cl-pri-btn>
		<!-- 输入提现密码 -->
		<van-popup
			v-model="show_popup"
			position="top">
			<div style="padding : 15px 0">
				<van-password-input
					:value="password"
					info="请输入提现密码"
					@focus="showKeyboard = true"
				/>
				<cl-pri-btn @click.native='confirmPwd'>确认提现</cl-pri-btn>
			</div>
			<!-- 数字输入键盘 -->
			<van-number-keyboard
				:show="showKeyboard"
				@input="onInput"
				@delete="onDelete"
				@blur="showKeyboard = false"
			/>
		</van-popup>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				radio :1,
				money : null,
				show_popup :false,
				password : '',//提现密码
				showKeyboard : false,
				info :{
					balance_money : null,
					remain_income : null,
					return_remain_money :null,
					is_bind : null,
					is_account : null
				},
				config :{
					withdraw_min_limit : null,
					withdraw_max_limit : null,
					withdraw_alipay_limit : null,
					withdraw_wechat_limit : null,
					withdraw_rate : null,
					withdraw_to_account :null,
					withdraw_to_credit : null
				}
			}
		},
		created () {
			this.http.post('/api/user/withdrawPage',{
				
			}).then(res => {
				this.info = res.result.info;
				this.config = res.result.config;
				if (this.result.info.is_bind == 0) {
					this.utils.msg('请先前往设置提现账户',()=>{
						this.$router.push('/cash-setting')
					})
				}
			})
		},
		
		methods : {
			clickRight () {
				this.$router.push('/cash-log')
			},
			onInput (value) {
				this.password += value;
			},
			onDelete () {
				this.password = this.password.slice(0,this.password.length -1)
			},
			confirm () {
				this.show_popup = true;
				setTimeout(()=>{
					this.showKeyboard = true;
				},500)
				
			},
			confirmPwd () {
				
			}
		},
	}
</script>
