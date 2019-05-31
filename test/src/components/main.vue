<template>
	<div>
		<headers></headers>
		<navs></navs>
		<router-view/>
		<shop-cart></shop-cart>
	</div>
</template>
<script>
	import Headers from './header.vue'
	import Navs from './navs.vue'
	import shopCart from './shopCart.vue'
	export default{
		components:{Headers,Navs,shopCart}
	}
</script>
<style scoped>
	
</style>