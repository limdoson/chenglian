<template>
	<div class="adr-add page">
		<cl-header rightText='删除地址' @onClickRight='test'></cl-header>
		<van-cell-group>
			<van-field v-model='name' required label='姓名' placeholder='请输入收货人姓名'></van-field>
			<van-field v-model='name' type='number' required label='电话' placeholder='请输入收货人电话'></van-field>
			<van-field
				v-model="name"
				label="所在地区"
				type='text'
				required
				readonly
				@click='show = true'
				placeholder="点击选择所在地区"/>
			<van-field v-model='name' required label='详细地址' placeholder='请输入详细地址'></van-field>
			<van-cell title="是否设为默认地址">
				<van-switch
					v-model="name"
					slot='right-icon'
					size='20px'
					active-color="#07c160"/>
			</van-cell>
		</van-cell-group>
		<cl-pri-btn >{{ $route.params.id ? '保存编辑' : '保存添加' }}</cl-pri-btn>
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
				name : null
			}
		},
		methods: {
			test(){
				this.$router.push('/adr-add')
			},
			consirmChose () {
				
			}
		}
	}
</script>

<style>
</style>
