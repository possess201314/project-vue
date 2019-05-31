<template>
	<div>
		<div class="shop">
			<div class="big">
				<div class="small" :class='{act:priceNum}' @click='showCartList()'>
					<i class='icon-shopping_cart'></i>
				</div>
				<span class="count" v-show='priceNum'>{{num}}</span>
			</div>
			<div class="price">
				<p>
					<span class='prices'>￥<b>{{priceNum}}</b></span>
					<span class="line"></span>
					<span class="fee">另需配送费￥<b>4</b>元</span>
				</p>
			</div>
			<div class="delivery">
				<strong v-show='priceNum<20'>￥20起送</strong>
			</div>
			<span class='cart' v-show='priceNum>=20' @click='goAccounts()'>去结算</span>
		</div>
		<mt-popup v-model="popupVisible" position="bottom">
			<div class="list">
				<div class="listBottom">
					<div class="title">
						<span>购物车</span>
						<a @click='clear()'>清空</a>
					</div>
					<ul>
						<li>
							<p class="name">莲子核桃黑米粥</p>
							<span class="price">￥<b>10</b></span>
							<i class='icon-remove_circle_outline'></i>
							<input type='text' value='1'>
							<i class='icon-add_circle'></i>
						</li>
					</ul>
				</div>
			</div>
		</mt-popup>
	</div>
</template>
<script>
	import Bus from './bus.js'
	import {Popup,MessageBox} from 'mint-ui'
	export default{
		data(){
			return {
				priceNum: 0,
				num: 0,
				popupVisible: false
			}
		},
		mounted(){
			Bus.$on('add',data=>{
				this.priceNum += data.price;
				this.num++;
			})
			Bus.$on('remove',data=>{
				this.priceNum -= data.price;
				this.num--;
			})
		},
		methods:{
			showCartList(){
				this.popupVisible=!this.popupVisible;
			},
			goAccounts(){
				MessageBox.alert(`总价格：${this.priceNum}`);
			},
			clear(){
				
			}
		}
	}
</script>
<style scoped>
	.shop{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 45px;
		background: #141d27;
		z-index: 99999;
	}
	.shop .big{
		position: absolute;
		left: 12px;
		top: -12px;
		width: 58px;
		height: 58px;
		border-radius: 50%;
		background: #141d27;
		z-index: 5;
	}
	.shop .big{
		position: relative;
	}
	.shop .big .count{
		position: absolute;
		top: 2px;
		right: 8px;
		width: 16px;
		height: 16px;
		font-size: 12px;
		text-align: center;
		line-height: 16px;
		color: #fff;
		background: #f00;
		border-radius: 50%;
		z-index: 10;
	}
	.shop .big .small{
		display: flex;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 44px;
		height: 44px;
		margin-left: -22px;
		margin-top: -22px;
		border-radius: 50%;
		background: rgba(0,0,0,.2);
		z-index: 6;
	}
	.shop .big .small i{
		font-size: 24px;
		color: rgba(255,255,255,.4);
		line-height: 24px;
		margin: auto;
	}
	.shop .big .small.act{
		background: rgb(0,160,220);
	}
	.shop .big .small.act i{
		color: rgb(255,255,255);
	}
	.shop .price{
		position: absolute;
		top: 12px;
		left: 70px;
	}
	.shop .price .prices{
		font-weight: 400;
	}
	.shop .price .prices b{
		font-size: 18px;
		color: rgba(255,255,255,.5);
	}
	.shop .price .line{
		margin: 0 12px;
		border-right: 1px solid #e6e7e8;
	}
	.shop .price .fee{
		font-size: 18px;
		color: rgba(255,255,255,.5);
	}
	.shop .price .fee b{
		font-weight: 400;
	}
	.shop .delivery{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 105px;
		height: 45px;
		padding: 0 8px;
		font-size: 12px;
		color: rgba(255,255,255,.4);
		font-weight: 700;
		text-align: center;
		background: #2b333b;
		box-sizing: border-box;
	}
	.shop .cart{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 105px;
		height: 45px;
		padding: 0 8px;
		font-size: 12px;
		color: rgb(255,255,255);
		font-weight: 700;
		text-align: center;
		background: rgb(1,180,60);
		box-sizing: border-box;
	}
	.mint-popup{
		width: 100%;
		bottom: 46px;
	}
	.mint-popup .list{
		width: 100%;
		height: 30vh;
		background: rgba(0,0,0,.5);
	}
	.mint-popup .list .listBottom{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 220px;
		background: #fff;
	}
	.mint-popup .list .listBottom .title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		height: 40px;
		padding-left: 18px;
		padding-right: 18px;
		background: rgb(243,245,247);
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.mint-popup .list .listBottom .title span{
		display: inline-block;
		font-size: 14px;
		font-weight: 200;
		color: rgb(7,17,27);
	}
	.mint-popup .list .listBottom .title a{
		color: rgb(0,160,220);
		font-size: 12px;
	}
	.mint-popup .list .listBottom ul{
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 170px;
	}
	.mint-popup .list .listBottom ul li{
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 90%;
		height: 48px;
		margin-left: 5%;
		border-bottom: 1px solid #ccc;
	}
	.mint-popup .list .listBottom ul li .name{
		position: absolute;
		left: 0;
		font-size: 14px;
		color: rgb(7,17,27);
	}
	.mint-popup .list .listBottom ul li .price{
		position: absolute;
		left: 224px;
		display: inline-block;
		font-size: 12px;
		color: rgb(240,20,20);
		margin-top: 4px;
	}
	.mint-popup .list .listBottom ul li .price b{
		display: inline-block;
		font-size: 14px;
		font-weight: 700;
		color: rgb(240,20,20);
	}
	.mint-popup .list .listBottom ul li i:nth-of-type(1){
		position: absolute;
		right: 50px;
		font-size: 24px;
		color: rgb(0,160,220);
		line-height: 24px;
		margin-right: 6px;
	}
	.mint-popup .list .listBottom ul li input{
		position: absolute;
		right: 24px;
		width: 24px;
		height: 24px;
		text-align: center;
		line-height: 24px;
		margin-right: 6px;
	}
	.mint-popup .list .listBottom ul li i:nth-of-type(2){
		position: absolute;
		right: 0;
		font-size: 24px;
		color: rgb(0,160,220);
		line-height: 24px;
	}
</style>