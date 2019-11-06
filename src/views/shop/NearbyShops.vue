<template>
	<div class="nearby-shops page">
		<cl-header></cl-header>
		<van-dropdown-menu>
			<van-dropdown-item :title='area'  ref='dropdownMenuItem'>
				<van-area :area-list="areaList" @cancel='cancleChose' @confirm='consirmChose'/>
			</van-dropdown-item>
			<van-dropdown-item v-model="shop_type" :options="shop_type_option" />
		</van-dropdown-menu>
		<cl-list>
			<ul class="shop-list" slot='list'>
				<router-link tag='li' class='f-s' to='/shop-detail'>
					<img src="../../assets/img/2.jpg" alt="">
					<div>
						<h1>店铺名称</h1>
						<p>店铺地址</p>
						<p class="s-b">
							<span>距离：<span class="red">1.0</span>公里</span>
							<span>立送：<span class="red">5%</span></span>
						</p>
					</div>
				</router-link>
			</ul>
		</cl-list>
	</div>
</template>

<script>
	import areaList from '@u/area'
	export default {
		components: {},
		data () {
			return {
				areaList,
				area : '福建省厦门市思明区',
				shop_type : 0,
				shop_type_option : [
					{
						text : '店铺类型0',
						value : 0
					},{
						text : '店铺类型1',
						value : 1
					},{
						text : '店铺类型2',
						value : 2
					}
				]
			}
		},
		created () {
			
		},
		
		methods : {
			cancleChose () {
				this.$refs.dropdownMenuItem.toggle(false)
			},
			consirmChose (result) {
				this.area = result[0].name + result[1].name + result[2].name ;
				this.$refs.dropdownMenuItem.toggle(false)
			}
		},
	}
</script>
