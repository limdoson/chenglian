<template>
	<div class="shop-car">
		<ul class="shop-car-list">
			<li class='f-s' v-for="item in list" :key='item.id'>
				<van-checkbox v-model='item.checked' checked-color="#07c160" @change='itemChange'></van-checkbox>
				<img :src="item.img_url" alt="">
				<div class="product-info">
					<h1>{{item.title}}</h1>
					<p class="attr s-b">
						<!-- <span>已选规格</span> -->
						<span class="red">单价￥{{item.price}}</span>
					</p>
					<p class="s-b">
						购买数量：
						<van-stepper button-size='20' v-model="item.number" @change='changeNumber(item)'/>
					</p>
				</div>
			</li>
		</ul>
		<!-- 底部按钮 -->
		<footer class="s-b">
			<div class="f-s">
				<van-checkbox v-model='selected_all' checked-color="#07c160" @click='changeSelectAll'>全选</van-checkbox>
				<div>
					合计：<span class="red">{{total_price}}</span>元
				</div>
			</div>
			<dl class="f-s btns">
				<dt>
					删除选定
				</dt>
				<dt @click='submitOrder'>
					提交订单
				</dt>
			</dl>
		</footer>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				list : [
					{
						id : 1,
						checked : false,
						number :1,
						price : 1
					},{
						id :2,
						checked : false,
						number :1,
						price : 2
					},{
						id : 3,
						checked : false,
						number :1,
						price : 3
					}
				],
				selected_all : false,
				total_price : 0,//选中商品的总价
			}
		},
		created () {
			this.initData()
		},
		
		methods : {
			initData () {
				this.http.post('/api/cart/index',{
					
				}).then(res =>{
					this.list = res.result;
				})
			},
			//勾选某个商品
			itemChange (checked) {
				this.selected_all = this.list.every(item => {
					return item.checked
				})
				this.getTotalPrice()
			},
			//全选
			changeSelectAll () {
				this.selected_all = !this.selected_all;
				this.list.map(item =>{
					item.checked = this.selected_all
				})
				this.getTotalPrice()
			},
			//修改数量
			changeNumber (item) {
				if (item.checked) {
					this.getTotalPrice()
				}
			},
			//提交订单
			submitOrder () {
				this.$router.push('/confirm-order')
			},
			//工具函数，用来求选择商品的合计价格
			getTotalPrice () {
				let totalPrice = 0;
				this.list.filter(item => item.checked).map(item => {
					totalPrice += Number(item.price) * Number(item.number)
				})
				this.total_price = totalPrice.toFixed(2);
			}
		},
	}
</script>
