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
		
		
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="-- 我是有底线的 --"
			@load="onLoad">
			<ul class="log-list">
				<li v-for='item in list' :key='item.id'>
					<div class='f-s'>
						<i class="iconfont">&#xe612;</i>
						<h1>
							{{item.record_type == 1 ? '消费金账户' : '余额宝'}}成功充值<span class="red">{{item.money}}</span>元，该账户当前余额{{item.remain_account}}元。
						</h1>
					</div>
					<p>
						{{item.created_at}}
					</p>
				</li>
			</ul>
		</van-list>
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
				limit : 50,
				page : 1,
				list : null
			}
		},
		created () {
	
		},
		methods: {
			test () {
				this.show = true;
				console.log(this.time)
			},
			onLoad () {
				this.http.post('/api/user/rechargeRecord',{
					page : this.page,
					limit : this.limit,
					record_type : null,
				}).then(res => {
					let list = res.result;
					
					if (list.length > 0) {
						if (this.page == 1) {
							this.list = list
						} else {
							this.list = this.list.concat(list)
						}
						this.page ++ 
					} else {
						if (this.page > 1) {
							this.loading = false;
							this.finished = true
						} else {
							this.list = list;
						}
						
					}
					this.loading = false;
				})
			}
		}
	}
</script>

<style>
</style>
