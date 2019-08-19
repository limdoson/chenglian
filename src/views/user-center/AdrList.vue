<template>
	<div class="adr-list page">
		<cl-header rightText='添加地址' @onClickRight='test'></cl-header>
		<none></none>
		<ul class="log-list">
			<li>
				<h1>林杜森-15960209969</h1>
				<p>福建省厦门市思明区前埔东路567号</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			test(){
				this.$router.push('/adr-add')
			}
		}
	}
</script>

<style>
</style>
