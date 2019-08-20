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
		path : '/reset-pwd',
		component : () => import('@v/user-center/ResetPwd'),
		meta : {
			title :'重置密码'
		}
	},
	//会员中心->收支明细
	{
		path : '/budget-detail',
		component : () => import('@v/user-center/BudgetDetail'),
		meta : {
			title :'收支明细'
		}
	},
	//消费金商城首页
	{
		path : '/cspn-shop',
		component : () => import('@v/cspn-shop/Index'),
		meta : {
			title :'消费金商城'
		}
	},
	//商家详情页
	{
		path : '/shop-detail/:id?',
		component : () => import('@v/shop/Index'),
		meta : {
			title :'店铺详情'
		}
	},
	//付款页面
	{
		path : '/pay/:id?',
		component : () => import('@v/shop/Pay'),
		meta : {
			title :'支付'
		}
	},
	//现金余额首页
	{
		path : '/cash-balance',
		component : () => import('@v/user-center/CashBalance'),
		meta : {
			title :'现金余额'
		}
	},
	//提现
	{
		path : '/cash-withdrawal',
		component : () => import('@v/user-center/CashWithdrawal'),
		meta : {
			title :'提现'
		}
	},
	//提现账户设置
	{
		path : '/cash-setting',
		component : () => import('@v/user-center/CashSetting'),
		meta : {
			title :'提现设置'
		}
	},
	//提现记录
	{
		path : '/cash-log',
		component : () => import('@v/user-center/CashLog'),
		meta : {
			title :'提现记录'
		}
	},
	//用户订单
	{
		path : '/user-order/:flag?',
		component : () => import('@v/user-center/UserOrder'),
		meta : {
			title :'我的订单'
		}
	},
	//公用的文章详情页
	{
		path : '/article-detail/:id?',
		component : () => import('@v/common-page/ArticleDetail'),
		meta : {
			title :'详情'
		}
	},
	//用户信息
	{
		path : '/user-info',
		component : () => import('@v/user-center/UserInfo'),
		meta : {
			title :'用户信息'
		}
	},
	//商品详情
	{
		path : '/product-detail/:id?',
		component : () => import('@v/product/ProductDetail'),
		meta : {
			title :'商品详情'
		}
	},
]
export default router_module;