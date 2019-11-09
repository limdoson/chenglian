<template>
	<van-field
		v-model="code"
		center
		type='number'
		clearable
		@change='change'
		required
		label="验证码"
		placeholder="请输入短信验证码">
		<van-button slot="button" size="small" type="primary" @click='sendCode' :disabled="disabled">{{btn_text}}</van-button>
	</van-field>
</template>

<script>
	export default {
		props : {
			value : {
				type : String,
				default : null
			},
			telephone : {
				default : null
			},
			type : {
				default : 'bind',//bind-绑定 regShop-注册 reset-重置密码
			}
		},
		components: {},
		data () {
			return {
				code : this.value,
				disabled : false,
				btn_text : '发送验证码',
				time : 10,
				timer : null
			}
		},
		created () {
			
		},
		
		methods : {
			sendCode () {
				if (!this.telephone) {
					this.utils.toast('请输入手机号码');
					return;
				}
				if ( !(/^1[3456789]\d{9}$/.test(this.telephone)) ) {
					this.utils.toast('手机号码格式错误，请重新填写');
					return;
				}
				clearInterval(this.timer)
				this.http.post('/api/user/code',{
					record_type : this.type,
					telephone : this.telephone
				}).then(res => {
					this.utils.toast(res.msg);
					setInterval(()=>{
						this.time --;
						this.btn_text = `${this.time}S后重发`
						this.disabled = true;
						if (this.time < 1) {
							this.btn_text = '发送验证码';
							this.disabled = false
						}
					},1000)
				})
			},
			change () {
				this.$emit('input',this.code)
			}
		},
		watch : {
			value (n) {
				this.code = n;
			}
		}
	}
</script>
