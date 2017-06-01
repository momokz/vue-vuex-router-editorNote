import Vue from 'vue'
import Router from 'vue-router'

// components
import index from '@/components/view/index';
import notPage from '@/components/view/notPage';

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '*',
		name: 'notPage',
		component: notPage
	}]
})