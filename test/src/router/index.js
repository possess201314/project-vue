import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/regirest'
import Login from '@/components/login'
import Main from '@/components/main'
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'
import Seller from '@/components/seller'
Vue.use(Router)
export default new Router({
	routes:[
		{
			path:'/reg',
			name:'Reg',
			component:Reg
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		},
		{
			path:'/main',
			name:'Main',
			component:Main,
			//÷ÿ∂®œÚ
			redirect:'/main/goods',
			children:[
				{
					path:'goods',
					name:'Goods',
					component:Goods
				},
				{
					path:'ratings',
					name:'Ratings',
					component:Ratings
				},
				{
					path:'seller',
					name:'Seller',
					component:Seller
				}
			]
		}
	]	
})