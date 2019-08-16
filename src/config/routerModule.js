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
]
export default router_module;