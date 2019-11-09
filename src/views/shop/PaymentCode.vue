<template>
	<div class="share-qr-code page">
		<cl-header></cl-header>
		<div class="container">
			<img :src="code_url" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				code_url : null
			}
		},
		created () {
			this.http.post('/api/user/paymentCode',{
				
			}).then(res => {
				this.code_url = res.result
			})
		}
	}
</script>

<style>
</style>
