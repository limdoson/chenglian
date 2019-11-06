<template>
	<div class="search-page">
		<!-- 搜索输入 -->
		<search @onSearch='searchHandle'>
			<span slot='left' style="margin-right: 10px;" @click='back'>返回</span>
			<van-button type="primary" size="mini" style='margin-left: 10px;' slot='right' @click='searchHandle'>搜索</van-button>
		</search>
		<!-- 搜索历史 -->
		<div class="search-logs">
			<ul class="logs f-s">
				<li>历史1</li>
				<li>历史2</li>
				<li>历史1</li>
				<li>历史2</li><li>历史1</li>
				<li>历史2</li><li>历史1</li>
				<li>历史2</li>
			</ul>
			<p class="clear-logs c-c">
				<i class="iconfont">&#xe61e;</i>
				清空历史记录
			</p>
		</div>
		<!-- 搜索结果 -->
		<cl-list></cl-list>
	</div>
</template>

<script>
	import Search from '@c/Search'
	export default {
		components: {Search},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			searchHandle () {
				console.log(1)
			},
			back () {
				this.$router.back();
			}
		},
	}
</script>
