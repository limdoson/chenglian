<template>
	<van-button round type="primary" size='small' block class='normal-btn' :disabled='disabled' style='height: 40px;'>
		<slot></slot>
	</van-button>
</template>

<script>
	export default {
		props : {
			disabled : {
				type : Boolean,
				default : false
			}
		}
	}
</script>

<style>
</style>
