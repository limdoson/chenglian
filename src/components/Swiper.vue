<template>
	<van-swipe :autoplay=' play ? play : 0 '  indicator-color="white" >
		<van-swipe-item v-for='item in 5' :key='item'>
			<img src="../assets/img/2.jpg" alt="">
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		props : ['list','autoplay'],
		data () {
			return {
				active : 0,
				play : null
			}
		},
		created  () {
			if (this.autoplay) {
				this.play = 3000
			} 
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style lang="less">
	
</style>
