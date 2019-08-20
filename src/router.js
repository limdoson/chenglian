import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import http from './utils/http.js'
import router_module from './config/routerModule.js'
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
					component : () => import('@v/Index'),
				},
				{
					path : 'user-center',
					meta : {
						title : '用户中心'
					},
					component : () => import('@v/UserCenter'),
				}
			]
		},
		...router_module
    ]
})
// let wx_api_list =['openLocation','getLocation','updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline','chooseWXPay'];

// router.beforeEach((to,form,next) => {
// 	
// })

router.afterEach((to, from) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	
	
})


export default router;