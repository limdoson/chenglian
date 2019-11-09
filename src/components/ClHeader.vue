<template>
	<van-nav-bar
		class='cl-header'
		:title="title ? title :$route.meta.title"
		left-text="返回"
		:right-text="rightText"
		left-arrow
		@click-left="onClickLeft"
		@click-right="onClickRight"
		:z-index='1987'
	/>
</template>

<script>
	export default {
		props : {
			rightText : {
				type : String,
				default : null
			},
			title : {
				type : String,
				default : null
			}
		},
		data () {
			return {
				
			}
		},
		methods: {
			onClickLeft () {
				if (window.history.length <= 1) {
					this.$router.push('/')
				} else {
					this.$router.back();
				}
			},
			onClickRight () {
				this.$emit('onClickRight');
			}
		}
	}
</script>

<style scoped lang="less">
	.cl-header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1987;
	}

</style>
