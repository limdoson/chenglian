<template>
	<div class="my-shop page">
		<cl-header></cl-header>
		<header>
			<div class="s-b">
				<div class="f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<h1>
						<p>林杜森</p>
						<p>编号：1</p>
					</h1>
				</div>
				<span class="level">
					推广y员等级1
				</span>
			</div>
		</header>
		<van-cell-group>
			<van-cell title="收款二维码" is-link to='/payment-code'/>
			<van-cell title="收款记录" is-link to='/payment-logs'/>
			<van-cell title="推广员升级" is-link url='/'/>
		</van-cell-group>
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
