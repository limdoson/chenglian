<template>
	<div class="product-comments page">
		<cl-header></cl-header>
		<header class="f-s">
			<img src="../../assets/img/2.jpg" alt="">
			<div>
				<h1>商品名称</h1>
				<p class='f-s'>
					综合评分：<van-rate v-model="rate" readonly allow-half/>
				</p>
			</div>
		</header>
		<ul class="comments">
			<li v-for='item in 4' >
				<h1 class="user-info f-s">
					<img src="../../assets/img/2.jpg" alt="">
					<span>用户昵称</span>
					<span>2018-08-08</span>
				</h1>
				<p class='comments-detail'>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				rate : 2.5
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
