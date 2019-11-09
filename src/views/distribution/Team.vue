<template>
	<div class="team page">
		<cl-header :title='title'></cl-header>
		<van-tabs v-model="active" @click='tabClick'>
			<van-tab title="一级" name='fir'></van-tab>
			<van-tab title="二级" name='sec'></van-tab>
			<van-tab title="三级" name='thd'></van-tab>
		</van-tabs>
		<van-list
			class='cl-list'
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="member-list" >
				<li class="f-s" v-for='item in list' :key='item.id'>
					<img :src="item.avatar" alt="">
					<div>
						<h1>{{item.real_name}}（{{item.nickname}}）</h1>
						<p class="s-b">
							<span>注册于：{{item.created_at}}</span>
							<!-- <span class="red">普通会员</span> -->
						</p>
					</div>
				</li>
			</ul>
		</van-list>
		</div>
	</div>
	
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				active : 'fir',
				page :1,
				limit :20,
				list : null,
				loading : false,
				finish : false
			}
		},
		created () {
			
		},
		computed: {
			url () {
				if (this.$route.query.flag == 'subUser') {
					return '/api/user/subUser'
				} else if (this.$route.query.flag == 'subPromote') {
					return '/api/user/subPromote'
				} else if (this.$route.query.flag == 'subShop') {
					return '/api/user/subShop'
				}
			},
			title () {
				if (this.$route.query.flag == 'subUser') {
					return '旗下会员'
				} else if (this.$route.query.flag == 'subPromote') {
					return '旗下推广会员'
				} else if (this.$route.query.flag == 'subShop') {
					return '旗下商家会员'
				}
			}
		},
		methods : {
			onLoad () {
				this.http.post(this.url, {
					page : this.page,
					limit : this.limit,
					type : this.active
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
							this.list = list;
						}
						this.loading = false;
						this.finished = true
					}
					
					
					this.loading = false;
				})
			},
			tabClick (name) {
				this.page = 1;
				this.onLoad()
			}
		},
	}
</script>
