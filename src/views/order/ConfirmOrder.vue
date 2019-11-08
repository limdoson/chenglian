<template>
	<div class="confirm-order page">
		<cl-header></cl-header>
		<!-- 地址 -->
		<dl class="chose-adr f-s">
			
			<dt class="s-b" style="flex: 1;" v-if='!addrInfo' @click="$router.push('/adr-list?flag=chose-adr')">
				<h1>请选择收货地址</h1>
				<i class="iconfont">&#xe7f9;</i>
			</dt>
			<dt class="s-b" style="flex: 1;" v-else  @click="$router.push('/adr-list?flag=chose-adr')">
				<div>
					<h1>{{addrInfo.real_name}}-{{addrInfo.telephone}}</h1>
					<p>{{addrInfo.province}}{{addrInfo.city}}{{addrInfo.district}}{{addrInfo.address}}</p>
				</div>
				<i class="iconfont">&#xe7f9;</i>
			</dt>
		</dl>
		<!-- 订单商品信息 -->
		<ul class="order-product-list">
			<li class="f-s" v-for='item in list' :key='item.id'>
				<img :src="item.img_url" alt="">
				<div>
					<h1>{{item.title}}</h1>
					<p class="s-b">
						<span>
							￥<span class="red">{{item.price}}</span>
						</span>
						<span>
							x {{item.number}}
						</span>
					</p>
				</div>
			</li>
		</ul>
		<van-cell-group>
			<van-field
				v-model="remark"
				label="订单留言"
				type="textarea"
				placeholder="请输入留言"
				rows="2"
				autosize
			/>
		</van-cell-group>
		<!-- 底部 -->
		<footer @click='confirm'>
			提交订单，总价{{total_money}}（含运费：{{shipping_price}}）
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
				remark :null,
				show : false,
				actions : [
					{
						name : '现金余额',
						value : 5
					},
					{
						name : '提现余额',
						value : 4
					}
				],
				client_type : null,//环境
				list : JSON.parse(localStorage.getItem('select_info')),
				total_money : null,
				shipping_price : null,
				addrInfo : JSON.parse(localStorage.getItem('adr-item')),
			}
		},
		created () {
			
			this.http.post('/api/order/confirm',{
				select_info : localStorage.getItem('select_info'),
			}).then(res => {
				this.list = res.result.cart_info
				if (res.result.is_consume == 1) {
					this.actions.push({
						name : '消费金账户',
						value : 6
					})
				}
				if (res.result.client_type == 'officialAccount') {
					this.actions.push({
						name : '微信支付',
						value : 1
					})
				} else {
					this.actions.push({
						name : '支付宝',
						value : 2
					})
				}
				this.total_money = res.result.total_money
				this.shipping_price = res.result.shipping_price
				this.client_type = res.result.client_type
				if (res.result.addrInfo) {
					this.addrInfo = res.result.addrInfo
				}
			})
		},
		
		methods : {
			confirm () {
				if (!this.addrInfo) {
					this.utils.toast('请选择一个收货地址');
					return;
				}
				this.show = true
			},
			onSelect (item) {
				let me = this;
				this.http.post('/api/order/pay',{
					select_info : localStorage.getItem('select_info'),
					addr_id : this.addrInfo.id,
					pay_type : item.value,
					remark : this.remark
				}).then(res => {
					if (res.result.type == 'need_pay') {
						if (this.client_type == 'officialAccount') {
							let pay_data = res.result.pay_data;
							//调起微信支付
							wx.chooseWXPay({
								timestamp : pay_data.timeStamp,
								appId : pay_data.appId,
								nonceStr : pay_data.nonceStr,
								package : pay_data.package,
								signType : pay_data.signType,
								paySign : pay_data.paySign,
								success : pay => {
									me.$router.replace('/pay-success')
								},
								fail : err => {
									alert(JSON.stringify(err))
								}
							})
						} else {
							this.utils.toast('暂不支持');
							return;
						}
					} else if (res.result.type == 'has_pay') {
						this.$router.replace('/pay-success')
					}
				})
				// this.$router.replace('/pay-success')
			}
		},
	}
</script>
