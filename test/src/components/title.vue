<template>
	<div class="title">
		<div class="line"></div>
		<div class="title-text">
			{{title}}
		</div>
		<div class="line"></div>
	</div>
</template>
<script>
	export default{
		name:'cmp-title',
		props:{
			title:{
				type:String,
				required:true
			}
		}
	}
</script>
<style scoped>
	.title{
		display: flex;
		justify-content: space-around;
		padding: 0 18px;
		margin-top: 28px;
	}
	.title .line{
		width: 112px;
		height: 2px;
		background: rgba(255,255,255,.2);
	}
	.title .title-text{
		flex: 1;
		text-align: center;
		margin: -7px 12px;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
	}
</style>