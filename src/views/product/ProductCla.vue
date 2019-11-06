<template>
	<div class="product-cla page">
		<cl-header></cl-header>
		<!-- 主分类 -->
		<ul class="slide-bar">
			<li 
				:class="activeKey == index ? 'active' : ''" 
				v-for='(item,index) in list' 
				:key='item.id' 
				@click='barClick(item,index)'>
				{{item.type_name}}
			</li>
		</ul>
		<!-- <van-sidebar v-model="activeKey">
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
		</van-sidebar> -->
		<!-- <van-sidebar v-model="activeKey">
			<van-sidebar-item :title="item.type_name" v-for='(item,index) in list' :key='item.id' @click='tabClick(item,index)'/>
		</van-sidebar> -->
		<!-- 次级分类 -->
		<div class="sub-cla">
			<img :src="type_logo" alt="" class="ad-img">
			<ul class="sub-cla-list f-s">
				<router-link tag='li' to='/product-detail' v-for='item in children' :key='item.id'>
					<img :src="item.type_logo" alt="">
					<p>{{item.type_name}}</p>
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
				activeKey : 0,
				list : null,
				children : null,
				type_logo : null
			}
		},
		created () {
			this.http.post('/api/product/type',{
				
			}).then(res => {
				this.list = res.result;
				this.type_logo = this.list[0].type_logo;
				this.children = this.list[0].children;
			})
		},
		
		methods : {
			barClick (item,index){
				this.activeKey = index
			}
		},
	}
</script>
<style scoped lang="less">
	.slide-bar {
		position: fixed;
		top: 0;
		padding-top: 46px;
		height: calc(100% - 46px);
		overflow-y: scroll;
		background: #f8f8f8;
		z-index: 1;
		li {
			display: block;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			padding: 20px 12px 20px 9px;
			overflow: hidden;
			color: #7d7e80;
			font-size: 14px;
			line-height: 1.4;
			word-break: break-all;
			background-color: #f8f8f8;
			border-left: 3px solid transparent;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			padding: 10px 12px 10px 8px;
		}
		.active {
			border-color: #07c160;
			background: #fff;
		}
	}
</style>
