<template>
	<div class="product-cla page">
		<cl-header></cl-header>
		<!-- 主分类 -->
		<van-sidebar v-model="activeKey">
			<van-sidebar-item :title="String(item)" v-for='item in 10' :key='item'/>
		</van-sidebar>
		<!-- 次级分类 -->
		<div class="sub-cla">
			<img src="../../assets/img/2.jpg" alt="" class="ad-img">
			<ul class="sub-cla-list f-s">
				<router-link tag='li' to='/product-detail' v-for='item in 50' :key='item +20'>
					<img src="../../assets/img/2.jpg" alt="">
					<p>次级名称</p>
				</router-link>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				activeKey :0
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
