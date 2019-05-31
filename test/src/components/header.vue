<template>
	<header>
		<!-- 头部开始 -->
		<div class="header-top">
			<div class="logo">
				<img :src="seller.avatar" width="64" height="64" alt='seller'>
			</div>
			<div class="information">
				<div class="name">
					<icon name='brand' :size='{width:30,height:20}'></icon>
					<span>{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="activity" v-if='seller.supports'>
					<icon name='decrease' :size='{width:12,height:12}'></icon>
					<span>{{seller.supports[0].description}}，满50减10</span>
					<p @click='show()'>5个<a class='icon-keyboard_arrow_right'></a></p>
				</div>
			</div>
		</div>
		<!-- 头部结束 -->
		<!-- 背景图片开始 -->
		<div class="bg" :style='bgImage' v-if='seller.avatar'></div>
		<!-- 背景图片结束 -->
		<!-- 公告开始 -->
		<div class="header-bottom" @click='show()'>
			<icon name='bulletin' :size='{width:22,height:12}'></icon>
			<span>{{seller.bulletin}}</span>
			<a class='icon-keyboard_arrow_right'></a>
		</div>
		<!-- 公告结束 -->
		<!-- 遮罩层开始 -->
		<transition name='slide'>
			<div class="mask" v-show='visible'>
				<div class="mask-content">
					<div class="mask-head" v-if='seller.score'>
						<h3>{{seller.name}}</h3>
						<star :score='seller.score'></star>
					</div>
					<cmp-title :title='key1'></cmp-title>
					<ul class="list">
						<li v-for='item,index in seller.supports'>
							<icon class="icon" :name='classMap[index]' :size='{width:16,height:16}'></icon>
							<span>{{item.description}}</span>
						</li>
					</ul>
					<cmp-title :title='key2'></cmp-title>
					<div class='text'>
						<p>{{seller.bulletin}}</p>
					</div>
					<i v-show='visible' @click='hide()' class='icon-close' style='position:absolute;bottom:32px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.5);font-size:32px'></i>
				</div>
			</div>
		</transition>
		<!-- 遮罩层结束 -->
	</header>
</template>
<script>
	export default{
		name:'cmpHeader',
		data(){
			return {
				seller:{},
				visible:false,
				key1:'优惠信息',
				key2:'商家公告'
			}
		},
		computed:{
			bgImage(){
				return {
					background:`url(${this.seller.avatar})`
				}
			}
		},
		methods:{
			show(){
				this.visible=true;
			},
			hide(){
				this.visible=false;
			}
		},
		created(){
			this.classMap = ['decrease','discount','discount','special','special'];
			this.$http.post('/apis/main').then(res=>{
				this.seller=res.data.seller;
			})
		}
	}
</script>
<style scoped>
	header{
		position: relative;
	}
	header.bg{
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		filter:blur(5px);
	}
	header .header-top{
		display: flex;
		background: rgba(7,17,27,.5);
		padding: 24px 16px 18px 24px;
	}
	header .header-top .logo{
		border-radius: 2px;
	}
	header .header-top .information{
		padding-left: 16px;
	}
	header .header-top .information .name{
		display: flex;
	}
	header .header-top .information .name .icon-brand{
		margin-right: 6px;
	}
	header .header-top .information .name span{
		line-height: 16px;
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}
	header .header-top .information .description{
		font-size: 12px;
		color: #fff;
		font-weight: 200;
		line-height: 12px;
		text-align: left;
		margin-top: 8px;
		margin-bottom: 10px;
	}
	header .header-top .information .activity{
		position: relative;
		display: flex;
		color: #fff;
	}
	header .header-top .information .activity .icon-decrease{
		margin-right: 4px;
	}
	header .header-top .information .activity span{
		font-size: 10px;
		color: #fff;
		font-weight: 200;
		line-height: 12px;
	}
	header .header-top .information .activity p{
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		top: -20px;
		left: 220px;
		width: 43px;
		height: 25px;
		font-size: 10px;
		color: #fff;
		border-radius: 10px;
		font-weight: 200;
		line-height: 12px;
		background: #4d5055;
	}
	header .header-top .information .activity p a{
		color: #fff;
	}
	header .header-bottom{
		display: flex;
		align-items: center;
		width: 100%;
		height: 28px;
		background: #4f545b;
	}
	header .header-bottom .icon-bulletin{
		margin-right: 4px;
		margin-left: 12px;
	}
	header .header-bottom span{
		flex: 1;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 10px;
		color: #fff;
	}
	header .header-bottom a{
		color: #fff;
	}
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: #394149;
		z-index: 99;
	}
	.slide-enter,.slide-leave-to{
		transform:translateY(-100vh);
	}
	.slide-enter-active,.slide-leave-active{
		transition:500ms;
	}
	.slide-enter-to,.slide-leave{
		transform:translateY(0vh);
	}
	.mask .mask-content{
		width: 100%;
	}
	.mask .mask-content .mask-head{
		width: 100%;
		margin-top: 64px;
		font-size: 16px;
		font-weight: 700;
		color: #fff;
		line-height: 16px;
	}
	.mask .mask-content .mask-head h3{
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}
	.mask .mask-content .list li{
		display: flex;
		margin-top: 24px;
		margin-left: 48px;
		margin-bottom: 12px;
	}
	.mask .mask-content .list li .icon{
		margin-right: 6px;
	}
	.mask .mask-content .list li span{
		font-size: 12px;
		font-weight: 200;
		color: #fff;
	}
	.mask .mask-content .text{
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		margin-top: 24px;
		font-size: 12px;
		font-weight: 200;
		line-height: 24px;
		color: #fff;
	}
	.mask .mask-content .text p{
		display: flex;
		justify-content: center;
		width: 276px;
		margin-left: 12px;
		margin-right: 12px;
	}
</style>