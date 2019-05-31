<template>
	<nav class="navbar">
		<ul class="navlist">
			<li v-for='item of navs'
				class='nav-item'
				:key='item.name'>
				<router-link :to='item.to'>{{item.name}}</router-link>
			</li>
		</ul>
	</nav>
</template>
<script>
	export default {
		name:'navbar',
		data(){
			return{
				navs:[
					{
						name:'商品',
						to:'goods'
					},
					{
						name:'评价',
						to:'ratings'
					},
					{
						name:'商家',
						to:'seller'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.navbar{ 
		height: 39px;
		line-height: 39px;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.navbar .navlist{
		display: flex;
	}
	.navbar .navlist .nav-item{
		flex: 1;
		text-align: center;
	}
	.navbar .navlist .nav-item .router-link-active{
		color: #f24b4b;
	}
</style>