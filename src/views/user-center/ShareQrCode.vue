<template>
	<div class="share-qr-code page">
		<cl-header></cl-header>
		<div class="container" v-if='img_url'>
			<img :src="img_url" alt="">
		</div>
		<cl-pri-btn v-else @click.native='$router.push(`/recharse`)'>开通推广员</cl-pri-btn>
		<cl-pri-btn v-if='!is_shop' @click.native='$router.push(`/shop-apply`)'>申请开店</cl-pri-btn>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				img_url : null,
				is_shop : false
			}
		},
		created () {
			this.http.post('/api/user/promote',{
				rec_id : this.$route.query.rec_id ? this.$route.query.rec_id : 0
			}).then(res => {
				if (res.result.is_promote) {//是商家推广员
					this.img_url = res.result.code_url;
				} 
				if (res.result.is_shop) {
					this.is_shop = true;
				}
			})
			// this.http.post('/api/user/shareCode',{
			// 	
			// }).then(res =>{
			// 	this.img_url = res.result
			// })
		}
	}
</script>

<style>
</style>
