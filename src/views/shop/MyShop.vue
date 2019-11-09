<template>
	<div class="my-shop page">
		<cl-header></cl-header>
		<template v-if='is_audit == 0'>
			<header>
				<div class="s-b">
					<div class="f-s">
						<img :src="shop_logo" alt="">
						<h1>
							<p>{{shop_name}}</p>
							<p>编号：{{id}}</p>
						</h1>
					</div>
					<!-- <span class="level">
						推广y员等级1
					</span> -->
				</div>
			</header>
			<van-cell-group>
				<van-cell title="收款二维码" is-link :to='`/payment-code/${id}`'/>
				<van-cell title="收款记录" is-link :to='`/payment-logs/${id}`'/>
				<van-cell title="推广员升级" is-link url='/'/>
			</van-cell-group>
		</template>
		<template v-else>
			<p style='padding: 10px;font-size: 14px;'>
				您的开店申请正在审核中，请耐心等待。
			</p>
		</template>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				shop_name : null,
				real_name : null,
				shop_logo : null,
				is_audit : 0, //0-已审核 1-未审核
				id : null
			}
		},
		created () {
			this.http.post('/api/user/shop',{
				
			}).then(res => {
				this.shop_name = res.result.shop_name;
				this.real_name = res.result.real_name;
				this.shop_logo = res.result.shop_logo;
				this.is_audit = res.result.is_audit;
				this.id = res.result.id;
			})
		},
		
		methods : {
			
		},
	}
</script>
