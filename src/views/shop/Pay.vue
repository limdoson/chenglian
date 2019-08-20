<template>
	<div class="pay page">
		<cl-header></cl-header>
		<header>
			<h1 class="f-s">
				<i class="iconfont">&#xe79f;</i>
				商家名称
			</h1>
			<div class="number-input s-b" @click='show = true'>
				<i class="iconfont">&#xe632;</i>
				<span>{{input_result}}</span>
			</div>
		</header>
		<!-- <van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell title="微信支付" clickable @click="radio = 1">
					<van-radio slot="right-icon" :name="1" checked-color="#07c160"/>
				</van-cell>
				<van-cell title="消费金充值" clickable @click="radio = 2">
					<van-radio slot="right-icon" :name="2" checked-color="#07c160" />
				</van-cell>
			</van-cell-group>
		</van-radio-group> -->
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
			}
		},
		created () {
			
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
			}
		},
	}
</script>
