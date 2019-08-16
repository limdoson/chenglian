<template>
	<div>
		<van-popup v-model="show_dialog" position="bottom" :close-on-click-overlay='false'>
			<van-datetime-picker
				v-model="currentDate"
				:max-date="maxDate"
				type="year-month"
				@cancel='cancle'
				@confirm ='confirm'
				:formatter="formatter"
			/>
		</van-popup>
	</div>
</template>

<script>
	export default {
		props : {
			show : {
				type : Boolean,
				default : false
			},
			value : {
				default : null
			},
			//时间类型
			type : {
				type : String,
				default : 'year-month'
			}
		},
		data () {
			return {
				result : this.value,
				currentDate :new Date(),
				maxDate : new Date(),
			}
		},
		computed: {
			show_dialog :{
				get () {
					return this.show
				},
				set () {
					
				}
			}
		},
		methods: {
			formatter (type,value) {
				if (type === 'year') {
					return `${value}年`;
				} else if (type === 'month') {
					return `${value}月`
				}
				return value;
			},
			//取消
			cancle () {
				this.result = null;
				this.$parent.show = false;
			},
			//确认
			confirm (time) {
					
				this.$emit('input',this.utils.parseTime(time,'yyyy-MM'));
				this.$parent.show = false;
			}
		},
		watch : {
			value (n) {
				this.result = n;
			}
		}
	}
</script>

<style>
</style>
