import ClLoadList from '@c/LoadList'
import ClList from '@c/List'
import ClHeader from '@c/ClHeader'
import ClTips from '@c/ClTips'
import ClNoticeTitle from '@c/ClNoticeTitle'
import ClPriBtn from '@c/ClPriBtn'
import ClDatePicker from '@c/ClDatePicker'
function vComponent(Vue) {
	// 判断组件组件是否已安装
	if(vComponent.installed){
		return;
	}
	Vue.component('ClLoadList',ClLoadList);
	Vue.component('ClList',ClList);
	Vue.component('ClHeader',ClHeader);
	Vue.component('ClTips',ClTips);
	Vue.component('ClNoticeTitle',ClNoticeTitle);
	Vue.component('ClPriBtn',ClPriBtn);
	Vue.component('ClDatePicker',ClDatePicker);
}
// 导出组件
export default vComponent