<template>
	<div class="search f-s" @click='clickSearch'>
		<slot name='left'></slot>
		<div class="container f-s">
			<van-icon name="search" />
			<input autocomplete="off"  type="text" placeholder="请输入搜索关键词" :readonly="readonly">
		</div>
		<slot name='right'>
			
		</slot>
	</div>
</template>

<script>
	
	export default {
		props : {
			//是否只读
			readonly : {
				type : Boolean,
				default : false
			}
		},
		components: {},
		data () {
			return {
				
			}
		},
		created  () {
			// console.log(this.readonly)
		},
		//mounted () {},
		methods : {
			clickSearch () {
				this.$emit('onClick')
			},
			search () {
				console.log('edmit')
				this.$emit('onSearch')
			}
		}
	}
</script>

<style scoped lang="less">
	.search {
		position: fixed;
		top: 0;
		width: ~"calc(100% - 20px)";
		padding : 5px 10px;
		background: #fff;
		z-index: 1;
		box-shadow : 2px 0px 8px #ccc;
		.container {
			flex: 1;
			background: #f1f1f1;
			border-radius: 20px;
			height : 30px;
			padding : 0 10px;
			.van-icon {
				font-size: 16px;
				margin-right: 10px;
			}
			input {
				flex: 1;
				background: #f1f1f1;
			}
		}
	}
</style>
