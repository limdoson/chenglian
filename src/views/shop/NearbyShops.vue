<template>
	<div class="nearby-shops page">
		<cl-header></cl-header>
		<van-dropdown-menu>
			<van-dropdown-item :title='area'  ref='dropdownMenuItem'>
				<van-area :area-list="areaList" @cancel='cancleChose' @confirm='consirmChose'/>
			</van-dropdown-item>
			<van-dropdown-item v-model="shop_type" :options="shop_type_option" @change='confirmShopType'/>
		</van-dropdown-menu>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="shop-list"  >
				<router-link tag='li' class='f-s' :to='`/shop-detail/${item.id}`' v-for='item in shop_list' :key='item.id'>
					<img :src="item.shop_logo" alt="">
					<div>
						<h1>{{item.shop_name}}</h1>
						<p>{{item.province}}{{item.city}}{{item.district}}{{item.address}}</p>
						<p class="s-b">
							<span>距离：<span class="red">{{item.distance}}</span>公里</span>
							<span>立送：<span class="red">{{item.discount}}%</span></span>
						</p>
					</div>
				</router-link>
			</ul>
		</van-list>
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
						text : '全部类型',
						value : 0
					}
				],
				longitude : '118.136566',
				latitude : '24.539618',
				page :1,
				limit : 10,
				shop_list : null,
				loading :false,
				finished : false,
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad () {
				this.http.post('/api/shop/near',{
					page : this.page,
					limit :this.limit,
					shop_type : this.shop_type,
					longitude : this.longitude,
					latitude :this.latitude
				}).then(res => {
					let list = res.result.shop;
					if (list.length > 0) {
						if (this.page == 1) {
							res.result.type.map(item => {
								item.text = item.type_name;
								item.value = item.id;
							});
							this.shop_type_option = this.shop_type_option.concat(res.result.type);
							this.shop_list = list;
						} else {
							this.shop_list = this.shop_list.concat(list)
						}
						this.page ++ 
						this.loading = false;
					} else {
						if (this.page > 1) {
							this.loading = false;
							this.finished = true
						} else {
							this.shop_list = list;
						}
						
					}
				})
			},
			cancleChose () {
				this.$refs.dropdownMenuItem.toggle(false)
			},
			consirmChose (result) {
				this.area = result[0].name + result[1].name + result[2].name ;
				this.$refs.dropdownMenuItem.toggle(false)
			},
			confirmShopType (result) {
				this.page = 1;
				this.onLoad()
			}
		},
	}
</script>
