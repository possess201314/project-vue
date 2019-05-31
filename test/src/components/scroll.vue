<template>
	<div ref='wrapper' class='wrap'>
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return {
				bs:{}
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init();
			},100)
		},
		methods:{
			init(){
				this.bs=new BScroll(this.$refs.wrapper,{
					click: true,
					probeType: 3
				});
			}
		}
	}
</script>
<style scoped>
	.wrap{
		overflow: hidden;
		width: 100%;
		height: 70vh;
	}
</style>