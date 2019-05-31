<template>
	<div class="seller">
		<div class="top">
			<div class="top1">
				<h3>{{seller.name}}</h3>
				<i class='icon-favorite'></i>
			</div>
			<div class="top2">
				<star :score='seller.score' v-if='seller.score'></star>
				<p>(661)</p>
				<b>月售690单</b>
				<i>已收藏</i>
			</div>
		</div>
		<div class="bottom">
			<ul>
				<li>
					<p>起送价</p>
					<b>20</b>
					<a>元</a>
				</li>
				<li>
					<p>商家配送</p>
					<b>4</b>
					<a>元</a>
				</li>
				<li>
					<p>平均配送时间</p>
					<b>39</b>
					<a>分钟</a>
				</li>
			</ul>
		</div>
		<div class="line" style='height:16px;width:100%;background:#f3f5f7;border-top:1px solid #ccc;border-bottom:1px solid #ccc;'></div>
		<div class="bulletin">
			<h3>公告与活动</h3>
			<p>{{seller.bulletin}}</p>
			<ul class="list">
				<li v-for='(item,index) of seller.supports'>
					<icon class="icon" :name='classMap[index]' :size='{width:16,height:16}'></icon>
					<span>{{item.description}}</span>
				</li>
			</ul>
		</div>
		<div class="line" style='height:16px;width:100%;background:#f3f5f7;border-bottom:1px solid #ccc;'></div>
		<div class="banner">
			<h3>商家实景</h3>
			<div ref='wrapper' class='pic'>
				<ul ref="content">
					<li v-for="(item,index) in seller.pics" :key="index">
						<img :src="item">
					</li>
				</ul>
			</div>
		</div>
		<div class="line" style='height:16px;width:100%;background:#f3f5f7;border-bottom:1px solid #ccc;'></div>
		<ul class="mainList">
			<li>
				<h3>商家信息</h3>
			</li>
			<li v-for='item,index of seller.infos' class='item'>{{item}}</li>
		</ul>
	</div>
</template>
<script>
	//import { Swipe, SwipeItem } from 'mint-ui';
	import BScroll from 'better-scroll'
	export default{
		data(){
			return {
				seller:{}
			}
		},
		created(){
			this.classMap = ['decrease','discount','discount','special','special'];
			this.$http.post('/apis/main').then(res=>{
				this.seller=res.data.seller;
			})
		},
		mounted(){
			setTimeout(()=>{
				this.init();
			},200)
		},
		methods:{
			init(){
				let con=this.$refs.content;
				let item=con.children;
				let oW=item.length*33.333+'%';
				con.style.width=oW+'px';
				/*for(let i=0;i<item.length;i++){
					item[i].style.width=1/item.length*100+'%'				
				}*/
				var bs=new BScroll(this.$refs.wrapper,{
					scrollX: true,
					scrollY: false,
					eventPassthrough:'vertical',
					probeType: 3
				})
			}
		}
	}
</script>
<style scoped>
	.seller{
		overflow: auto;
		width: 100%;
		height: 66vh;
	}
	.seller .top{
		display: flex;
		flex-wrap: wrap;
		width: 96%;
		height: 76px;
		border-bottom: 1px solid rgba(7,17,27,.1);
		margin-left: 4%;
	}
	.seller .top .top1{
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.seller .top .top1 h3{
		font-size: 14px;
		color: rgb(7,17,27);
		padding-top: 18px;
	}
	.seller .top .top1 i{
		display: inline-block;
		font-size: 24px;
		color: rgb(240,20,20);
		line-height: 24px;
		margin-left: 224px;
		margin-top: 20px;
	}
	.seller .top .top2{
		display: flex;
		width: 100%;
		margin-bottom: 18px;
	}
	.seller .top .top2 .star-middle{
		margin-top: -2px;
	}
	.seller .top .top2 p{
		margin-top: -2px;
		margin-left: 8px;
	}
	.seller .top .top2 b{
		font-weight: 200;
		font-size: 12px;
		color: rgb(77,85,93);
		margin-left: 12px;
	}
	.seller .top .top2 i{
		margin-top: 2px;
		font-style: normal;
		font-size: 12px;
		color: rgb(77,85,93);
		margin-left: 70px;
	}
	.seller .bottom{
		display: flex;
		justify-content: sapce-around;
		align-items: center;
		width: 96%;
		height: 74px;
		margin-left: 4%;
	}
	.seller .bottom ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.seller .bottom ul li{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 33.333%;
		height: 100%;
	}
	.seller .bottom ul li p{
		width: 100%;
		justify-content: center;
		color: rgb(147,153,159);
	}
	.seller .bottom ul li b{
		margin-top: 4px;
		font-size: 24px;
		font-weight: 200;
		color: rgb(7,17,27);
	}
	.seller .bulletin{
		width: 96%;
		margin-left: 2%;
		border-bottom: 1px solid rgb(7,17,27,.1);
	}
	.seller .bulletin h3{
		margin-top: 18px;
		text-align: left;
		margin-bottom: 8px;
	}
	.seller .bulletin p{
		margin-left: 12px;
		margin-right: 12px;
		font-size: 12px;
		line-height: 24px;
		color: rgb(240,20,20);
		margin-bottom: 16px;
		text-align: left;
	}
	.seller .bulletin .list li{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 98%;
		height: 48px;
		margin-left: 2%;
		border-bottom: 1px solid rgb(7,17,27,.1);
	}
	.seller .bulletin .list li .icon{
		margin-right: 6px;
	}
	.seller .bulletin .list li span{
		font-size: 12px;
		font-weight: 200;
		color: rgb(7,17,27);
	}
	.seller .banner{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 151px;
		paddint-left: 18px;
	}
	.seller .banner h3{
		width: 100%;
		text-align: left;
		margin-top: 18px;
		font-size: 16px;
		padding-left: 18px;
	}
	.seller .banner .pic{
		overflow-x: hidden;
		width: 100%;
	}
	.seller .banner .pic ul{
		display: flex;
		width: 100%;
		margin-top: 12px;
		padding-left: 18px;
	}
	.seller .banner .pic ul li{
		box-sizing: border-box;
		width: 33.333%;
		margin-right: 6px;
	}
	.seller .banner .pic ul li img{
		width: 120px;
		height: 90px;
	}
	.seller .mainList{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.seller .mainList li:first-child{
		width: 98%;
		height: 43px;
		text-align: left;
		line-height: 43px;
		margin-left: 2%;
		font-size: 14px;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.seller .mainList .item{
		width: 98%;
		text-align: left;
		padding-top: 16px;
		padding-bottom: 16px;
		margin-left: 2%;
		padding-left: 12px;
		font-size: 15px;
		font-weight: 200;
		color: rgb(7,17,27);
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
</style>