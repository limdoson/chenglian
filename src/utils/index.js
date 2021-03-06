import Vue from 'vue';

class Utils extends Vue {
    constructor () {
        super();
		
    }
	msg (msg,cb) {
		this.$dialog.alert({
			message: msg,
			confirmButtonColor :'#09bb07'
		}).then(()=>{
			cb && cb();
		})
	}
	toast(msg) {
		this.$toast(msg);
	}
	/* 时间格式化方法 */
	parseTime (time,fmt) {
		let o = {   
			"M+" : time.getMonth()+1,                 //月份   
			"d+" : time.getDate(),                    //日   
			"h+" : time.getHours(),                   //小时   
			"m+" : time.getMinutes(),                 //分   
			"s+" : time.getSeconds(),                 //秒   
			"q+" : Math.floor((time.getMonth()+3)/3), //季度   
			"S"  : time.getMilliseconds()             //毫秒   
		};   
		if(/(y+)/.test(fmt))   
			fmt=fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));   
		for(var k in o)   
			if(new RegExp("("+ k +")").test(fmt))   
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
		return fmt;   
	}
	// 校验客户端为微信浏览器或支付宝浏览器
	checkAgent () {
		if (/MicroMessenger/.test(window.navigator.userAgent)) {
			return 'wechat'
		} else if (/AplipayClient/.test(window.navigator.userAgent)) {
			return 'alipay'
		} else {
			return 'other'
		}
	}
}

export default new Utils;