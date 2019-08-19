<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
		
	</div>
</template>
<script>

	export default {

		data () {
			return {
				active : 0
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>