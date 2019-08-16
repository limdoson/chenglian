<template>
	<h1 class="title f-s">
		<i class="iconfont">&#xe630;</i>
		{{label}}
	</h1>
</template>

<script>
	export default {
		props : {
			label : {
				type : String,
				default : '提示'
			}
		}
	}
</script>

<style>
</style>
