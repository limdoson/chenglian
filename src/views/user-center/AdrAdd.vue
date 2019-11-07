<template>
	<div class="adr-add page">
		<cl-header :rightText="$route.params.id ? '删除地址' : ''" @onClickRight='deleteAdr'></cl-header>
		<van-cell-group>
			<van-field v-model='real_name' required label='姓名' placeholder='请输入收货人姓名'></van-field>
			<van-field v-model='telephone' type='number' required label='电话' placeholder='请输入收货人电话'></van-field>
			<van-field
				v-model='arae_data'
				label="所在地区"
				type='text'
				required
				readonly
				@click='show = true'
				placeholder="点击选择所在地区"/>
			<van-field v-model='address' required label='详细地址' placeholder='请输入详细地址'></van-field>
			<van-switch-cell v-model="is_default" title="是否设为默认地址" />
		</van-cell-group>
		<cl-pri-btn @click.native='confirm'>{{ $route.params.id ? '保存编辑' : '保存添加' }}</cl-pri-btn>
		<!-- 地区选择 -->
		<van-popup
			v-model="show"
			position="bottom"
			:style="{ height: '40%' }">
			<van-area :area-list="areaList" @cancel='show = false' @confirm='consirmChose'/>
		</van-popup>
	</div>
</template>

<script>
	import areaList from '@u/area'
	export default {
		data () {
			return {
				areaList,
				show : false,
				real_name : null,
				telephone : null,
				province : null,
				city : null,
				district : null,
				address : null,
				is_default : false,
				arae_data : null
			}
		},
		created () {
			// console.log(this.$route)
			if (this.$route.params.id) {
				this.http.post('/api/address/info',{
					id : this.$route.params.id
				}).then(res => {
					this.real_name = res.result.real_name;
					this.telephone = res.result.telephone;
					
					this.province = res.result.province;
					this.city = res.result.city;
					this.district = res.result.district;
					this.address = res.result.address;
					this.is_default = res.result.is_default;
					this.arae_data = `${this.province}-${this.city}-${this.district}`
				})
			}
		},
		methods: {
			test(){
				this.$router.push('/adr-add')
			},
			consirmChose (result) {
				this.province = result[0].name;
				this.city = result[1].name;
				this.district = result[2].name;
				this.arae_data = `${this.province}-${this.city}-${this.district}`
				this.show = false;
			},
			confirm () {
				if (!this.real_name || !this.telephone || !this.arae_data || !this.address) {
					this.utils.toast('请填写必填信息');
					return;
				}
				if (!(/^1[3456789]\d{9}$/.test(this.telephone))) {
					this.utils.toast('手机号码有误，请重新填写');
					return;
				}
				if (this.$route.params.id) {
					
					this.http.post('/api/address/update',{
						id : this.$route.params.id,
						real_name : this.real_name,
						telephone :this.telephone,
						province :this.province,
						city : this.city,
						district :this.district,
						address :this.address,
						is_default : this.is_default
					}).then(res => {
						this.utils.msg('编辑成功',()=>{
							this.$router.back();
						})
					})
				} else {
					this.http.post('/api/address/create',{
						real_name : this.real_name,
						telephone :this.telephone,
						province :this.province,
						city : this.city,
						district :this.district,
						address :this.address,
						is_default : this.is_default
					}).then(res => {
						this.utils.msg('添加成功',()=>{
							this.$router.back();
						})
					})
				}
				
			},
			deleteAdr () {
				this.http.post('/api/address/delete',{
					id : this.$route.params.id
				}).then(res => {
					this.utils.msg('删除成功',()=>{
						this.$router.back();
					})
				})
			}
		}
	}
</script>

<style>
</style>
