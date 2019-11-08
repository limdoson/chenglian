import Vue from 'vue'

class wxConfig extends Vue {
	constructor () {
		super();
		this.jsApiList = ['openLocation','getLocation','updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline','chooseWXPay']
		this._yichuang_default = {
			title : '诚联生活',
			desc : '爱分享，爱生活',
			link : location.origin + '/entrep',
			imgUrl : location.origin + '/img/logo.png',
			success : res => {
				
			}
		}
		this._wap_default = {
			title : '诚联生活',
			desc : '爱分享，爱生活',
			link : location.origin + '/wap',
			imgUrl : location.origin + '/wap/img/cl_logo.png',
			success : res => {
				
			}
		}
	}
	
	appConfig () {
		let me = this;
		this.http.post('/api/weChat/sdk',{
			url : location.href
		}).then( res => {
			wx.config({
				debug : false,
				appId : res.result.appId,
				timestamp : res.result.timestamp,
				nonceStr : res.result.nonceStr,
				signature : res.result.signature,
				jsApiList : me.jsApiList,
				success : res => {
					// alert(JSON.stringify(res))
				}
			})
			
		})
		wx.ready(()=>{
			wx.updateAppMessageShareData(me._wap_default)
			wx.updateTimelineShareData(me._wap_default)
			wx.onMenuShareAppMessage(me._wap_default)
			wx.onMenuShareTimeline(me._wap_default)
		})
	}
}
export default new wxConfig