import Vue from 'vue';
import Vuex from 'vuex';

// actions
import {
	rawAction
} from './actions';

// getters
import {
	getRawValue
} from './getters';

Vue.use(Vuex);

const state = {
	rawEditor: '',
	renderEditor: ''
};

const actions = {
	rawAction
};

const getters = {
	getRawValue
};

const mutations = {
	SUCCESS(state, value) {
		state.rawEditor = value;
	}
};

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
});