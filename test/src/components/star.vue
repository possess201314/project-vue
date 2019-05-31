<template>
	<div class="star" :class='iconClass'>
		<span v-for='item,index in starClasses' class="star-item" :class='item' :key='index'></span>
	</div>
</template>
<script>
	export default{
		name:'star',
		props:{
			//分数
			score:{
				type:Number,
				required:true
			},
			//星星的大小
			size:{
				type:[Number,String],
				default:'middle'
			}
		},
		computed:{
			//计算星星的大小
			iconClass(){
				return 'star-'+this.size
			},
			//根据得分计算出星星的class名
			starClasses(){
				//写一个关于星星的class名的数组
				let arr=[];
				//获取整数部分
				let integer=parseInt(this.score);
				for(let i=1;i<=integer;i++){
					arr.push('on');
				}
				let decimal=this.score%1;
				if(decimal === 0.5){
					arr.push('half');
				}else if(decimal > 0.5){
					arr.push('on');
				}
				while(arr.length < 5){
					arr.push('off');
				}
				return arr;
			}
		}
	}
</script>
<style scoped>
	.star{
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}
	star .star-item{
		display: inline-block;
	}
	/*小型*/
	.star.star-24,.star.star-small .star-item{
		width: 12px;
		height: 12px;
		margin-right: 10px;
	}
	.star .star-item.on{
		background: url('./star24_on@2x.png');
		background-size: cover;
	}
	.star .star-item.off{
		background: url('./star24_off@2x.png');
		background-size: cover;
	}
	.star .star-item.half{
		background: url('./star24_half@2x.png');
		background-size: cover;
	}
	/*中型*/
	.star.star-36,.star.star-middle .star-item{
		width: 18px;
		height: 18px;
		margin-right: 10px;
	}
	.star .star-item.on{
		background: url('./star36_on@2x.png');
		background-size: cover;
	}
	.star .star-item.off{
		background: url('./star36_off@2x.png');
		background-size: cover;
	}
	.star .star-item.half{
		background: url('./star36_half@2x.png');
		background-size: cover;
	}
	/*大型*/
	.star.star-48,.star.star-large .star-item{
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}
	.star .star-item.on{
		background: url('./star48_on@2x.png');
		background-size: cover;
	}
	.star .star-item.off{
		background: url('./star48_off@2x.png');
		background-size: cover;
	}
	.star .star-item.half{
		background: url('./star48_half@2x.png');
		background-size: cover;
	}
</style>