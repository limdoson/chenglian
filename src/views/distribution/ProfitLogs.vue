<template>
	<div class="profit-logs page">
		<cl-header></cl-header>
		<van-list
			class='cl-list'
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="log-list" >
				<li v-for='item in list' :key='item.id'>
					<h1>
						{{item.title}}，金额：<span class="red">{{item.money}}</span>
					</h1>
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
		components: {},
		data () {
			return {
				page : 1,
				limit :20,
				list : null,
				loading : false,
				finished : false
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad () {
				this.http.post('/api/user/income', {
					page : this.page,
					limit : this.limit,
				}).then(res => {
					let list = res.result.data;
					
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
			}
		},
	}
</script>
