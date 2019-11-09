<template>
	<div class="payment-logs page">
		<cl-header ></cl-header>
		<p style='color: #07c160;padding : 10px;font-size: 13px;' class="s-b">
			<span>
				今日收款：<span class="green">{{income.today}}</span>
			</span>
			<span>
				累计收款：<span class="green">{{income.total}}</span>
			</span>
		</p>
		
		
		<!-- <cl-date-picker v-model='end' :show='show_end'></cl-date-picker> -->
		<van-list
			class='cl-list'
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="log-list" >
				<li v-for='item in list' :key='item.id'>
					<h1>
						{{item.created_at}}，收到用户<span class="red">{{item.real_name ? item.real_name : item.nick_name}}</span>付款<span class="red">{{item.money}}</span>元
					</h1>
				</li>
			</ul>
		</van-list>
		<footer @click='show_search = true'>
			搜索收款记录
		</footer>
		<!-- 搜索 -->
		<van-popup v-model='show_search' position="bottom">
			<van-cell-group>
				<van-field v-model='search_user_id' label='用户id' placeholder='请输入付款用户id'></van-field>
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
				<van-button size="small"  type="primary" @click='confirmSearch' style="margin-right: 10px">搜 索</van-button>
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
		components: {},
		data () {
			return {
				loading :false,
				finished : false,
				page : 1,
				limit : 50,
				list : null,
				begin : null,
				end : null,
				search_user_id : null,
				income :{
					total : 0,
					today : 0
				},
				show_search : false,
				show_begin_date_picker : false,
				flag : 'begin',
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad () {
				this.http.post('/api/user/paymentRecord',{
					page : this.page,
					limit :this.limit,
					shop_id : this.$route.params.id,
					begin : this.begin,
					end : this.end,
					search_user_id : this.search_user_id
				}).then(res => {
					let list = res.result.list;
					
					if (list.length > 0) {
						if (this.page == 1) {
							this.list = list
							this.income = res.result.income;
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
		},
	}
</script>
<style scoped lang="less">
	.payment-logs {
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
