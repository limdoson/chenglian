import axios from 'axios'  
import Vue from 'vue';
import Router from '@/router'
import config from '@/config/index'


function getCookie (name) {
	var strcookie = document.cookie;//获取cookie字符串
	var arrcookie = strcookie.split("; ");//分割
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name){
			return arr[1];
		}
	}
	return "";
}


/*
 * code
 * 	100   常规错误
	101   参数不全
	110   未登录
	111   插入失败
	112   更新失败
	113   删除失败
	404   查无数据
	200     请求正常（有数据）
 */

let http = axios.create({
    baseURL : config.base_request_host,
    withCredentials: true,//跨域
})


class Http extends Vue {
    //POST方法
    post (url,params) {
        //每次请求都提交缓存中的session_id
        http.defaults.headers = {
            // "authorization": Storage.get('session_id') ? Storage.get('session_id') :'',
            'content-type': 'application/json',
        }    
		// : Object.assign({url : location.href},params),
        return new Promise((resolve, reject) => {
            http({
				headers :{
					'authorization' : decodeURIComponent(getCookie('user_token'))
				},
                method: 'post',
                url : process.env.NODE_ENV  == 'development' ? `/api${url}` : url,
                params : process.env.NODE_ENV == 'development' ? Object.assign({
					is_test : 1,
					user_id : 2665,
					url : location.href
				},params) : Object.assign({
					url : location.href
				},params), 
            }).then(res => { 
				// alert(getCookie('user_token'))
                //判断code
                switch (res.data.code) {
                    case 200: //正常，且有数据，或操作成功
                        resolve(res.data)
                        break;
					case 100: //正常错误
					    this.utils.toast(res.data.msg)
					    break;
					case 100: //正常错误
					    this.utils.toast(res.data.msg)
					    break;
					case 111: //正常错误
					    this.utils.toast(res.data.msg)
					    break;
					case 110: //未登录
						this.http.post('/v1/wechat/getAppId',{
							
						}).then(res => {
							let url = encodeURIComponent('https://laravel.linxmwx.cn/customer');
							let _href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ res.data.appId + '&redirect_uri=' + url + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'

							location.href = _href;
						})
						// this.utils.msg(res.data.msg,()=>{
						// 	Router.replace('/')
						// })
					    break;
                    case 112: //无数据或操作失败
                        this.utils.msg(res.data.msg)
                        break;
					case 404: //无数据或操作失败
					    this.utils.msg('网络错误，请稍后重试')
					    break;
					case 301: //无数据或操作失败
						location.href = res.data.result.redirect_uri
					    // Router.replace()
					    break;
                }
				
            })
			// .catch(err => {
			// 	this.utils.toast('系统错误')
   //              console.log(err)
   //          })

        })
    }
}
export default new Http