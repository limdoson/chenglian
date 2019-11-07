<template>
	<div class="share-qr-code page">
		<cl-header></cl-header>
		<div class="container">
			<img :src="img_url" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				img_url : null,
			}
		},
		created () {
			this.http.post('/api/user/shareCode',{
				
			}).then(res =>{
				this.img_url = res.result
			})
		}
	}
</script>

<style>
</style>
