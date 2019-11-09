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
	//商品全部评论
	{
		path : '/product-comments/:id?',
		component : () => import('@v/product/ProductComments'),
		meta : {
			title :'商品评价'
		}
	},
	//确认订单
	{
		path : '/confirm-order/:id?',
		component : () => import('@v/order/ConfirmOrder'),
		meta : {
			title :'确认订单'
		}
	},
	//支付成功
	{
		path : '/pay-success',
		component : () => import('@v/order/PaySuccess'),
		meta : {
			title :'支付成功'
		}
	},
	//绑定用户信息
	{
		path : '/bind',
		component : () => import('@v/common-page/Bingd'),
		meta : {
			title :'用户信息完善'
		}
	},
	//商品分类
	{
		path : '/product-cla',
		component : () => import('@v/product/ProductCla'),
		meta : {
			title :'商品分类'
		}
	},
	//附近店铺
	{
		path : '/nearby-shops',
		component : () => import('@v/shop/NearbyShops'),
		meta : {
			title :'附近商家'
		}
	},
	//忘记密码
	{
		path : '/forget-pwd',
		component : () => import('@v/user-center/ForgetPwd'),
		meta : {
			title :'忘记密码'
		}
	},
	//推广中心->我的团队
	{
		path : '/team/:flag?',
		component : () => import('@v/distribution/Team'),
		meta : {
			title :'我的团队'
		}
	},
	//推广中心->收益记录
	{
		path : '/profit-logs',
		component : () => import('@v/distribution/ProfitLogs'),
		meta : {
			title :'收益记录'
		}
	},
	//推广中心->收益排行
	{
		path : '/profit-rank',
		component : () => import('@v/distribution/ProfitRank'),
		meta : {
			title :'销量排行'
		}
	},
	//搜索
	{
		path : '/search',
		component : () => import('@v/common-page/Search'),
		meta : {
			title :'搜索'
		}
	},
	//我的店铺
	{
		path : '/my-shop',
		component : () => import('@v/shop/MyShop'),
		meta : {
			title :'我的店铺'
		}
	},
	//我的店铺->收款二维码
	{
		path : '/payment-code/:id?',
		component : () => import('@v/shop/PaymentCode'),
		meta : {
			title :'收款二维码'
		}
	},
	//我的店铺->收款记录
	{
		path : '/payment-logs/:id?',
		component : () => import('@v/shop/PaymentLogs'),
		meta : {
			title :'收款记录'
		}
	},
	//商品分类->商品分类商品列表
	{
		path : '/product-list/:id',
		component : () => import('@v/product/ProductList'),
		meta : {
			title :'商品列表'
		}
	},
	//绑定用户信息
	{
		path : '/bind-user-info',
		component : () => import('@v/user-center/BindUserInfo'),
		meta : {
			title :'完善用户信息'
		}
	}
]
export default router_module;