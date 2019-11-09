import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import http from './utils/http.js'
import router_module from './config/routerModule.js'

import wxShare from '@u/wx'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/wap/',
    mode : process.env.NODE_ENV == 'development' ? 'hash' : 'history',
	activeClass : 'active',
    routes : [
        {
			path : '/',
			component : () => import('@v/Layout'),
			children : [
				{
					path : '',
					meta : {
						title : '诚联商城'
					},
					component : () => import('@v/Index'),
				},
				{
					path : 'shop-car',
					meta : {
						title : '购物车'
					},
					component : () => import('@v/ShopCar'),
				},
				{
					path : 'user-center',
					meta : {
						title : '用户中心'
					},
					component : () => import('@v/UserCenter'),
				},
				{
					path : 'distribution',
					meta : {
						title : '推广中心'
					},
					component : () => import('@v/Distribution'),
				}
			]
		},
		...router_module
    ]
})
// let wx_api_list =['openLocation','getLocation','updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline','chooseWXPay'];

router.beforeEach((to,form,next) => {
	/*
	非首页验证是否绑定用户信息
	 */
	if (to.path != '/') {
		http.post('/api/user/pwdPage',{
			
		}).then(res => {
			if (res.result.is_bind == 0) {//未绑定
				Router.push('/bind-user-info')
			} else {
				next();
			}
		})
		
	} else {
		next();
	}
	
})

router.afterEach((to,from) => {
    /*
     * 将页面title设置为meta中的title
     */
    if(to.meta.title) {
        window.document.title = to.meta.title;
    }
	/*
     * 如果页面有要求设置分享参数
     */
    wxShare.appConfig();
	
	
})

export default router;