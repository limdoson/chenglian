<template>
	<div class="recharge-log page">
		<cl-header></cl-header>
		
		<van-cell-group>
			<van-field
				@click='test'
				v-model="time"
				center
				readonly
				clearable
				placeholder="请选择搜索时间">
				<van-button slot="button" size="small" icon='search' type="primary">搜索</van-button>
			</van-field>
		</van-cell-group>
		
		<cl-date-picker v-model='time' :show='show'></cl-date-picker>
		
		<cl-notice-title label='充值记录'></cl-notice-title>
		
		<ul class="log-list">
			<li>
				<div class='f-s'>
					<i class="iconfont">&#xe612;</i>
					<h1>
						消费金账户成功充值<span class="red">500</span>元，该账户当前余额510元。
					</h1>
				</div>
				<p>
					2018-08-08 15:33:33
				</p>
			</li>
		</ul>
		<!-- <van-list
			v-model="loading"
			:finished="finished"
			finished-text="-- 我是有底线的 --"
			@load="onLoad">
			
		</van-list> -->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				time : null,
				show : false,
				loading :false,
				finished : false,
				
			}
		},
		methods: {
			test () {
				this.show = true;
				console.log(this.time)
			},
			onLoad () {
				
			}
		}
	}
</script>

<style>
</style>
