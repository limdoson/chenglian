<template>
	<div class="cash-balance page">
		<cl-header rightText='充值记录' @onClickRight='clickRight'></cl-header>
		<header>
			<i class="iconfont">&#xe612;</i>
			现金余额：￥<span class="red">0.00</span>元
			<cl-tips>
				会员充值活动，余额满<span class="red" style='font-size: 13px;font-weight: normal;'>100</span>以上，<span class="red" style='font-size: 13px;font-weight: normal;'>0.06%</span>天天送
			</cl-tips>
		</header>
		<cl-tips>提现请绑定微信，单笔最大提现金额：<span class="red">2000</span>元，信用卡重置手续费<span class="red">0.8%</span></cl-tips>
		<!-- 规则等相关提示 -->
		<div class="roles">
			<p>1、现金余额实时提现到账，时间1分钟到24小时内到账；</p>
			<p>2、规则：余额重置未满23小时不赠送，可结算余额未满<span class="red">100</span>元以上不赠送；每满23小时当天23时送余额的<span class="red">0.06%</span>；</p>
			<p>3、单笔最小提现额度：<span class="red">2</span>元，最大提现额度：<span class="red">20000</span>元。</p>
		</div>
		<cl-pri-btn @click.native="$router.push('/recharge')">立即充值</cl-pri-btn>
		<cl-pri-btn @click.native="$router.push('/cash-withdrawal')">现金余额提现</cl-pri-btn>
		<cl-pri-btn>收益明细</cl-pri-btn>
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
			clickRight () {
				this.$router.push('/cash-balance-recharge-log');
			}
		},
	}
</script>
