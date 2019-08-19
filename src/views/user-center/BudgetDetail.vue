<template>
	<div class="budget-detail page">
		<cl-header>
			
		</cl-header>
		<van-dropdown-menu class='drown-menu' active-color='#07c160'>
			<van-dropdown-item v-model="type" :options="option" />
		</van-dropdown-menu>
		<ul class="log-list">
			<li>
				<h1>
					向<span class="red">xxxx</span>支付<span class="red">1.00</span>元，支付账户：<span class="red">现金账户</span>。
				</h1>
				<p>2018-08-08 88-88-88</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				type : 0,
				option : [
					{ text: '支出明细', value: 0 },
					{ text: '收入明细', value: 1 },
				]
			}
		}
	}
</script>

<style>
</style>
