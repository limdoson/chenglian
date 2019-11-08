<template>
	<van-swipe :autoplay=' play ? play : 0 '  indicator-color="white" >
		<van-swipe-item v-for='item in list' :key='item.id'>
			<router-link tag='img' :src='item.img_url' :to='item.link_url'>
				
			</router-link>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		props : {
			list : {
				default : null
			},
			autoplay : {
				default : true
			}
		},
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
			// console.log(this.list)
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style lang="less">
	
</style>
