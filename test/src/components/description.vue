<template>
	<div class="description">
		<p class="name">{{food.name}}</p>
		<p class="type">{{food.description}}</p>
		<p class="sales">
			<span>月售{{food.sellCount}}份</span>
			<span>好评率{{food.rating}}%</span>
		</p>
		<p class="price">
			<span class="nowPrice">￥{{food.price}}</span>
			<s class="oldPrice" v-if='food.oldPrice'>￥{{food.oldPrice}}</s>
			<i class='icon-remove_circle_outline' @click='remove()' v-show='food.count'></i>
			<input type='text' v-show='food.count' :value='food.count'>
			<i class='icon-add_circle' @click='add()'></i>
		</p>
	</div>
</template>
<script>
	import Bus from './bus.js'
	export default{
		name:'description',
		props:{
			food:{
				type:Object,
				required:true
			}
		},
		methods:{
			add(){
				if(!this.food.count){
					this.$set(this.food,'count',1)
				}else{
					this.food.count++;
				}
				Bus.$emit('add',this.food);
			},
			remove(){
				this.food.count--;
				Bus.$emit('remove',this.food)
			}
		}
	}
</script>
<style scoped>
	.description{
		position: relative;
		flex: 1;
		flex-wrap: wrap;
	}
	.description .name{
		width: 100%;
		text-align: left;
		padding-left: 10px;
		margin-top: 2px;
		font-size: 14px;
		line-height: 14px;
		color: rgb(7,17,27);
	}
	.description .type{
		width: 100%;
		text-align: left;
		padding-left: 10px;
		margin-top: 8px;
		line-height: 10px;
		font-size: 12px;
		color: rgb(147,153,159);
	}
	.description .sales{
		display: flex;
		width: 100%;
		text-align: left;
		padding-left: 10px;
		margin-top: 8px;
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.description .sales span:first-child{
		margin-right: 12px;
	}
	.description .price{
		display: flex;
		width: 100%;
		text-align: left;
		padding-left: 10px;
		margin-top: 8px;
	}
	.description .price .nowPrice{
		font-size: 14px;
		color: #f01414;
		line-height: 24px;
		font-weight: 700;
		margin-right: 8px;
	}
	.description .price .oldPrice{
		font-size: 10px;
		color: rgb(147,153,159);
		line-height: 24px;
		font-weight: 700;
		margin-right: 92px;
	}
	.description .price i:nth-of-type(1){
		position: absolute;
		right: 50px;
		font-size: 24px;
		color: rgb(0,160,220);
		line-height: 24px;
		margin-right: 6px;
	}
	.description .price input{
		position: absolute;
		right: 32px;
		width: 24px;
		height: 24px;
		text-align: center;
		line-height: 24px;
		margin-right: 6px;
	}
	.description .price i:nth-of-type(2){
		position: absolute;
		right: 16px;
		font-size: 24px;
		color: rgb(0,160,220);
		line-height: 24px;
	}
</style>