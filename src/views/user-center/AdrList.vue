<template>
	<div class="adr-list page">
		<cl-header rightText='添加地址' @onClickRight='addHandle'></cl-header>
		<none v-if='!list'></none>
		<ul class="log-list">
			<li  v-for='item in list' :key='item.id' @click='adrHandle(item)'>
				<h1>{{item.real_name}}-{{item.telephone}}</h1>
				<p>
					{{item.province}}{{item.city}}{{item.didistrict}}{{item.address}}
				</p>
			</li>
			
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
			addHandle () {
				this.$router.push('/adr-add')
			},
			adrHandle (item) {
				if (this.$route.query.flag == 'chose-adr') {
					localStorage.setItem('adr-item',JSON.stringify(item))
					this.$router.back()
				} else {
					this.$router.push(`/adr-add/${item.id}`)
				}
			}
		}
	}
</script>

<style>
</style>
