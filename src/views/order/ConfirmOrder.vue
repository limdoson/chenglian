<template>
	<div class="confirm-order page">
		<cl-header></cl-header>
		<!-- 地址 -->
		<dl class="chose-adr f-s">
			<!-- <dt class="s-b" style="flex: 1;">
				<div>
					<h1>林杜森-15960209969</h1>
					<p>福建省厦门市思明区前埔东路567号</p>
				</div>
				<i class="iconfont">&#xe7f9;</i>
			</dt> -->
			<dt class="s-b" style="flex: 1;">
				<h1>请选择收货地址</h1>
				<i class="iconfont">&#xe7f9;</i>
			</dt>
		</dl>
		<!-- 订单商品信息 -->
		<ul class="order-product-list">
			<li class="f-s">
				<img src="../../assets/img/2.jpg" alt="">
				<div>
					<h1>商品名称</h1>
					<p>商品描述信息</p>
					<p>已选规格属性</p>
					<p class="s-b">
						<span>
							￥<span class="red">1.00</span>
						</span>
						<span>
							x 2
						</span>
					</p>
				</div>
			</li>
			<li class="f-s">
				<img src="../../assets/img/2.jpg" alt="">
				<div>
					<h1>商品名称</h1>
					<p>商品描述信息</p>
					<p>已选规格属性</p>
					<p class="s-b">
						<span>
							￥<span class="red">1.00</span>
						</span>
						<span>
							x 2
						</span>
					</p>
				</div>
			</li>
		</ul>
		<van-cell-group>
			<van-field
				v-model="message"
				label="订单留言"
				type="textarea"
				placeholder="请输入留言"
				rows="2"
				autosize
			/>
		</van-cell-group>
		<!-- 底部 -->
		<footer @click='confirm'>
			提交订单
		</footer>
		<!-- 支付方式上拉菜单 -->
		<van-action-sheet
			v-model="show"
			:actions="actions"
			cancel-text="取消"
			@select="onSelect"
		/>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				message :null,
				show : false,
				actions : [
					{
						name : '方式1',
						subname : '可用余额：0.00',
						disabled : true
					},
					{
						name : '方式2',
						subname : '可用余额：110.00'
					}
				]
			}
		},
		created () {
			
		},
		
		methods : {
			confirm () {
				this.show = true
			},
			onSelect (item) {
				this.$router.replace('/pay-success')
			}
		},
	}
</script>
