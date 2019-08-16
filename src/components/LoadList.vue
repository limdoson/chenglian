<template>
	<van-list
		v-model="loading"
		:finished="finished"
		finished-text="没有更多了"
		@load="onLoad">
		<ul class="product-list f-s">
			<router-link tag='li' to=''>
				
			</router-link>
		</ul>
	</van-list>
</template>

<script>
	export default {
		data () {
			return {
				loading  : false,
				finished : false,
			}
		},
		created () {
			
		},
		activated() {
			
		},
		methods: {
			onLoad () {
				
			}
		}
	}
</script>

<style>
</style>
