<template>
	<div class="layout">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import pageFooter from '@c/Footer'
	export default {
		components: {pageFooter},
		data () {
			return {
				
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>