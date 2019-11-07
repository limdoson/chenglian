<template>
	<div class="adr-list page">
		<cl-header rightText='添加地址' @onClickRight='test'></cl-header>
		<none v-if='!list'></none>
		<ul class="log-list">
			<router-link v-for='item in list' :key='item.id' tag='li' :to='`/adr-add/${item.id}`'>
				<h1>{{item.real_name}}-{{item.telephone}}</h1>
				<p>
					{{item.province}}{{item.city}}{{item.didistrict}}{{item.address}}
				</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list : null,
			}
		},
		created () {
			this.http.post('/api/address/list',{
				
			}).then(res => {
				this.list = res.result;
			})
		},
		methods: {
			test(){
				this.$router.push('/adr-add')
			}
		}
	}
</script>

<style>
</style>
