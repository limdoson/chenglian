<template>
	<div class="shop-apply page">
		<cl-header></cl-header>
		<van-cell-group>
			<van-field
				v-model="telephone"
				required
				clearable
				label="手机号码"
				placeholder="请输入手机号码"
			  />
			<van-field
				v-model="password"
				type="password"
				label="密码"
				placeholder="请设置登录密码"
				required
			/>
			<send-code :telephone='telephone' v-model="code" type='regShop'></send-code>
			<van-field
				v-model="shop_name"
				type="text"
				label="店铺名称"
				placeholder="请输入店铺名称"
				required
			/>
			<van-field
				v-model='arae_data'
				label="所在地区"
				type='text'
				required
				readonly
				@click='show = true'
				placeholder="点击选择所在地区"/>
			<van-field
				v-model="address"
				type="text"
				label="店铺地址"
				placeholder="请输入店铺地址"
				required
			/>
			<van-field
				v-model="discount"
				type="number"
				label="供货折扣"
				placeholder="请输入店铺名称"
				required
			/>
			<van-field
				v-model="real_name"
				type="text"
				label="真实姓名"
				placeholder="请填写真实姓名"
				required
			/>
			<div class="f-s upload">
				<span class="label"><span class="red">*</span>营业执照</span>
				
				<van-uploader :after-read="upload">
					<img :src="host + license_url" alt="" v-if='license_url'>
				</van-uploader>
			</div>
			
		</van-cell-group>
		<cl-pri-btn @click.native='apply'>提交申请</cl-pri-btn>
		<!-- 地区 -->
		<van-popup
			v-model="show"
			position="bottom"
			:style="{ height: '40%' }">
			<van-area :area-list="areaList" @cancel='show = false' @confirm='consirmChose'/>
		</van-popup>
	</div>
</template>

<script>
	import sendCode from '@c/SendCode'
	import areaList from '@u/area'
	import axios from 'axios'  
	export default {
		components:{sendCode},
		data () {
			return {
				areaList,
				show : false,
				password : null,
				telephone : null,
				code : null,
				shop_name : null,
				real_name : null,
				discount : null,
				license_url : null,
				province : null,
				city : null,
				district : null,
				address : null,
				arae_data : null,
				host : null
			}
		},
		methods : {
			upload (file) {
				
				let fm = new FormData();
				let url =  process.env.NODE_ENV == 'development'  ? '/api/api/utility/upload' : '/api/utility/upload'
				// fm.append('name', 'img');
				fm.append('img',file.file)
				fm.append('type','license')
				
				axios.post(url,fm,
					{
						headers : {
							'Content-Type': 'multipart/form-data'
						}
					}
				).then(res => {
					this.license_url = res.data.result.filename;
					this.host = res.data.result.host;
				})
			},
			consirmChose (result) {
				this.province = result[0].name;
				this.city = result[1].name;
				this.district = result[2].name;
				this.arae_data = `${this.province}-${this.city}-${this.district}`
				this.show = false;
			},
			apply () {
				console.log(this)
				if (!this.telephone || !this.password || !this.code || !this.shop_name|| !this.arae_data || !this.address || !this.discount || !this.real_name || !this.license_url) {
					this.utils.toast('请填写所有必填项信息');
					return;
				}
				
				this.http.post('/api/user/regShop',{
					password :this.password,
					telephone : this.telephone,
					code :this.code,
					shop_name : this.shop_name,
					real_name  : this.real_name,
					license_url : this.license_url,
					province : this.province,
					city : this.city,
					district :this.district,
					discount : this.discount,
					address :this.address
				}).then(res =>{
					
				})
			}
		}
	}
</script>

<style>
</style>
