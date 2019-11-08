<template>
	<div class="pay page">
		<cl-header></cl-header>
		<header>
			<h1 class="f-s">
				<i class="iconfont">&#xe79f;</i>
				{{shop.shop_name}}
			</h1>
			<div class="number-input s-b" @click='show = true'>
				<i class="iconfont">&#xe632;</i>
				<span>{{input_result}}</span>
			</div>
		</header>
		<ul class="account-info">
			<li>
				消费金账户余额：<span class="red">{{user.consume_account}}</span>
			</li>
			<li>
				现金余额账户：<span class="red">{{user.balance_money}}</span>
			</li>
			<li>
				提现账户余额：<span class="red">{{user.remain_income}}</span>
			</li>
		</ul>
		<div class="key-board" v-if='show'>
			<div class="f-s">
				<ul class="key-board-list f-s">
					<li @click='inputHandle(1)'>1</li>
					<li @click='inputHandle(2)'>2</li>
					<li @click='inputHandle(3)'>3</li>
					
				</ul>
				<div class="btns" @click='deleteHandle'>
					<i class="iconfont">&#xe627;</i>
				</div>
			</div>
			<div class="f-s">
				<ul class="key-board-list f-s">
					<li @click='inputHandle(4)'>4</li>
					<li @click='inputHandle(5)'>5</li>
					<li @click='inputHandle(6)'>6</li>
					<li @click='inputHandle(7)'>7</li>
					<li @click='inputHandle(8)'>8</li>
					<li @click='inputHandle(9)'>9</li>
					<li @click="inputHandle('.')">.</li>
					<li @click='inputHandle(0)'>0</li>
					<li @click='hideKeyBoard'>
						<i class="iconfont">&#xe61c;</i>
					</li>
				</ul>
				<div class="btns confirm" @click='confirmPay'>
					<span>确</span>
					<span>认</span>
					<span>支</span>
					<span>付</span>
				</div>
			</div>
		</div>
		<!-- 支付方式选择 -->
		<van-action-sheet
			v-model="show_pay_type"
			:actions="actions"
			@select="onSelect"
			cancel-text="取消"
		/>
		<!-- 密码输入 -->
		<div class="password-input" v-if='show_password_input'>
			<van-field
				class='password-current-input'
				v-model="password"
				type="password"
			    label="密码"
			    placeholder="请输入密码"
			/>
			<van-number-keyboard
				:show="show_password_input"
				:hide-on-click-outside='true'
				extra-key="."
				close-button-text="输入完成/密码为空时取消输入"
				@close="confirmPwd"
				@input="onInput"
				@delete="onDelete"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				radio : 1,
				input_result : null,//输入结果
				show : true,
				//支付方式相关
				show_pay_type : false,//是否显示支付方式选择
				show_password_input : false,
				actions : [
					{
						name : '现金余额',
						value : 5
					},
					{
						name : '提现余额',
						value : 4
					}
				],
				value : null,//记录选择的支付方式的value
				shop : {
					shop_name : null,
					is_consume : null,//是否支持消费金  1-支持 0-不支持
				},
				user : {
					consume_account : 0,//消费金账户余额
					balance_money :0,//余额宝余额
					remain_income : 0//提现账户余额
				},
				client_type : null,
				password : null,
			}
		},
		created () {
			this.http.post('/api/payment/index',{
				id : this.$route.params.id
			}).then(res => {
				this.shop = res.result.shop;
				this.user =  res.result.user;
				this.client_type = res.result.client_type;
				
				if (res.result.shop.is_consume == 1) {
					this.actions.push({
						name : '消费金账户',
						value : 6
					})
				}
				if (res.result.client_type == 'officialAccount') {
					this.actions.push({
						name : '微信支付',
						value : 1
					})
				} else {
					this.actions.push({
						name : '支付宝',
						value : 2
					})
				}
				
			})
		},
		
		methods : {
			inputHandle (input) {
				//起始为0时，不允许再输入0
				if (this.input_result == 0 && input == 0) {
					return;
				}
				
				//如果已经有小数点，禁止再次输入小数点
				if (this.input_result && this.input_result.search(/[.]/i) > -1 && /\D/.test(input)) {
					return;
				}
				//限制只能输入两位小数
				if (this.input_result && /^(\d+)\.(\d\d)/.test(this.input_result)) {
					
					return;
				}
				//正常输入数字
				if (typeof input == 'number') {
					if (this.input_result == null) {
						this.input_result = String(input)
					} else {
						this.input_result += String(input)
					}
				}
				//输入小数点
				if (/\D/.test(input)) {
					if (this.input_result == null) {
						this.input_result = '0' + String(input)
					} else {
						this.input_result += String(input)
					}
				}
			},
			//删除
			deleteHandle () {
				if (this.input_result) {
					if (this.input_result.length > 0) {
						this.input_result =this.input_result.substr(0,this.input_result.length -1)
					} else {
						this.input_result = null;
					}
				}
				
			},
			//隐藏键盘
			hideKeyBoard () {
				this.show = false;
			},
			//确认支付
			confirmPay () {
				if (!this.input_result) {
					this.utils.msg('请输入有效的支付金额');
					return;
				}
				//如果输入的最后一位是小数点，则去除
				if (/\.$/.test(this.input_result)) {
					this.input_result = this.input_result.replace(/\./,'');
				}
				this.show_pay_type = true;
			},
			//选择支付方式
			onSelect (item) {
				this.value = item.value;
				//账户支付时需要输入密码
				if (item.value == 1) {//微信支付
					this.pay()
				} else if (item.value == 2) {//支付宝
					this.utils.toast('暂不支持');
					return;
				} else {//账户支付，输入支付密码
					this.show_pay_type = false;
					this.show_password_input = true;
				}
				
			},
			pay () {
				this.http.post('/api/payment/create',{
					shop_id : this.$route.params.id,
					money : this.input_result,
					pay_type : this.value,
					password : this.password
				}).then(res => {
					if (res.result.type == 'need_pay') {
						if (this.client_type == 'officialAccount') {
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
						} else {
							this.utils.toast('暂不支持');
							return;
						}
					} else if (res.result.type == 'has_pay') {
						this.$router.replace('/pay-success')
					}
					
					this.show = false;
					this.show_password_input = false;
					this.show_pay_type = false
				})
			},
			onInput (value) {
				if (!this.password) {
					this.password = String(value);
				} else {
					this.password += String(value);
				}
			},
			onDelete () {
				this.password = this.password.substring(0,this.password.length - 1)
			},
			confirmPwd () {
				if (!this.password || this.password == '') {
					this.show_password_input = false;
					return;
				} else {
					this.pay()
				}
				
			}
		},
	}
</script>
<style scoped lang='less'>
	.account-info {
		li {
			padding : 6px 10px;
			font-size: 13px;
		}
	}
	.password-input {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		z-index: 2000;
	}
	.password-current-input {
		position: fixed;
		bottom: 246px;
		z-index: 2000;
	}
</style>
