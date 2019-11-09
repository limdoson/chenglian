<template>
	<div class="recharge-log page">
		<cl-header></cl-header>
		<cl-notice-title label='充值记录'></cl-notice-title>
		
		
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="-- 没有更多了 --"
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
		
		<footer @click='show_search = true'>
			搜索收款记录
		</footer>
		<!-- 搜索 -->
		<van-popup v-model='show_search' position="bottom">
			<van-cell-group>
				<van-field
					label='开始时间'
					@click="showDatePciker('begin')"
					v-model="begin"
					center
					clearable
					readonly
					placeholder="请选择搜索时间">
				</van-field>
				<van-field
					@click="showDatePciker('end')"
					label='结束时间'
					v-model="end"
					readonly
					center
					clearable
					placeholder="请选择搜索时间">
				</van-field>
			</van-cell-group>
			<div style='text-align: center;padding: 10px;'>
				<van-button size="small" type="primary" @click='confirmSearch' style="margin-right: 10px">搜 索</van-button>
				<van-button type="default" size="small" @click='show_search = false'>取 消</van-button>
			</div>
		</van-popup>
		<!-- 时间选择器 -->
		<van-popup v-model='show_begin_date_picker' position="bottom">
			<van-datetime-picker type="date" @confirm='confirmBeginDate' @cancel='show_begin_date_picker = false'/>
		</van-popup>
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
				list : null,
				begin : null,
				end : null,
				show_search : false,
				show_begin_date_picker : false,
				flag : 'begin',
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
					limit :this.limit,
					begin : this.begin,
					end : this.end,
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
						if (this.page == 1) {
							this.list = list
						}
						this.loading = false;
						this.finished = true
					}
					
					
					this.loading = false;
				})
			},
			showDatePciker (flag) {
				this.flag = flag;
				this.show_begin_date_picker = true;
				
			},
			confirmBeginDate (val) {
				if (this.flag == 'begin') {
					this.begin = this.utils.parseTime(val,'yyyy-MM-dd')
				} else {
					this.end = this.utils.parseTime(val,'yyyy-MM-dd')
				}
				this.show_begin_date_picker = false
			},
			confirmSearch () {
				this.page = 1;
				this.onLoad();
				this.show_search = false;
			}
		}
	}
</script>

<style scoped lang="less">
	.recharge-log {
		padding-bottom : 100px;
		footer {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 50px;
			text-align: center;
			line-height: 50px;
			font-size: 14px;
			color: #fff;
			background: rgb(7, 193, 96);
		}
	}
</style>
