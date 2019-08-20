<template>
	<div class="cash-log page">
		<cl-header></cl-header>
		<cl-list>
			<ul class="log-list" slot='list'>
				<li>
					<h1>
						提现金额：<span class="red">1.00</span>元，手续费：<span class="red">0</span>元，实际到账：<span class="red">1.00</span>元，申请日期：2018-08-08 08-08-08，到账账户：<span class="red">现金余额</span>。
					</h1>
					<p class="s-b">
						<span>已到账</span>
						<span>2018-08-08 08-08-08</span>
					</p>
				</li>
			</ul>
		</cl-list>
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
			
		},
	}
</script>
