import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        user : null,
		is_bind : false,
    },
    mutations : {
		initUser (state,payload) {
			state.user = payload;
		},
		bindInitMus (state,payload) {
			state.is_bind = payload
		}
	},
    actions : {},
	// plugins : [VuexAlong]
})
