const router_module = [
	//充值
	{
		path : '/recharge',
		component : () => import('@v/user-center/Recharge'),
		meta : {
			title :'充值'
		}
	},
	//充值记录
	{
		path : '/recharge-log',
		component : () => import('@v/user-center/RechargeLog'),
		meta : {
			title :'充值记录'
		}
	},
	//会员中心->分享二维码
	{
		path : '/share-qr-code',
		component : () => import('@v/user-center/ShareQrCode'),
		meta : {
			title :'推广二维码'
		}
	},
	//会员中心->开店申请
	{
		path : '/shop-apply',
		component : () => import('@v/user-center/ShopApply'),
		meta : {
			title :'开店申请'
		}
	},
	//会员中心->收货地址列表
	{
		path : '/adr-list',
		component : () => import('@v/user-center/AdrList'),
		meta : {
			title :'地址管理'
		}
	},
	//会员中心->地址添加、编辑
	{
		path : '/adr-add/:id?',
		component : () => import('@v/user-center/AdrAdd'),
		meta : {
			title :'地址详情'
		}
	},
	//会员中心->重置密码
	{
		path : '/reset-pwd/',
		component : () => import('@v/user-center/ResetPwd'),
		meta : {
			title :'重置密码'
		}
	},
	//会员中心->收支明细
	{
		path : '/budget-detail/',
		component : () => import('@v/user-center/BudgetDetail'),
		meta : {
			title :'收支明细'
		}
	},
]
export default router_module;