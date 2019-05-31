import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pig1 from '@/components/pig1'
import pig2 from '@/components/pig2'
import owner from '@/components/owner'
import dog from '@/components/dog'
import parent from '@/components/parent'
import child1 from '@/components/child1'
import child2 from '@/components/child2'
import ship from '@/components/ship'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {path: '/pig1',component: pig1,name:'p1'},
    {path: '/pig2',component: pig2,name:'p2'},
    {path: '/owner',component: owner,name:'owner'},
    {path: '/dog',component: dog,name:'dog'},
    {path: '/ship',components: {crow:ship},name:'ship'},
    {path: '/',component: parent,name:'parent',
			children:[
				{path: '/',component: child1,name:'child1'},
				{path: 'child2',component: child2,name:'child2'}
			]
		}
  ]
})
