<template>
	<scroll>
		<div class="rat">
			<div class="main">
				<div class="main-left">
					<h1>3.9</h1>
					<p>综合评分</p>
					<span>高于周边商家69.2%</span>
				</div>
				<div class="main-right">
					<div class="server1">
						<span>服务态度</span>
						<div class="star">
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_off@2x.png'>
						</div>
						<a>3.9</a>
					</div>
					<div class="server2">
						<span>服务态度</span>
						<div class="star">
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_on@2x.png'>
							<img src='./star36_off@2x.png'>
						</div>
						<a>4.2</a>
					</div>
					<div class="time">
						<span>送达时间</span>
						<a>44分钟</a>
					</div>
				</div>
			</div>
			<div class="space"></div>
			<sel :ratings='ratings' @send='get' :getType='selectType'></sel>
			<div class="content" @click='getData()'>
				<a class='icon-check_circle' ref='icon'></a>
				<span>只看有内容的评价</span>
			</div><hr/>
			<div class="ratings">
				<ul>
					<li v-for='item,index of ratings' :key='index' v-show='select(item.rateType)' v-if='getTxt(item.text)'>
						<div class="img">
							<img :src='item.avatar'>
						</div>
						<div class="right">
							<span class="name">{{item.username}}</span>
							<!-- <a style='font-size:12px;color:rgb(147,153,159)'>{{item.rateTime | setTime('当前时间')}}</a> -->
							<a style='font-size:12px;color:rgb(147,153,159)'>{{setTime(item.rateTime)}}</a>
							<p class="starTime">
								<star :score='item.score'></star>
								<span v-show='item.deliveryTime' class='timer'>{{item.deliveryTime}}分钟送达</span>
							</p>
							<p class="ratingsContent">
								{{item.text}}
							</p>
							<p class="goodName">
								<span v-for='items,index of item.recommend' :key='index'>{{items}}</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</scroll>
</template>
<script>
	import sel from './select.vue'
	import scroll from './scroll.vue'
	export default{
		components:{
			sel,
			scroll
		},
		data(){
			return{
				ratings:[],
				selectType:2,
				visible: true
			}
		},
		created(){
			this.$http.post('/apis/main').then(res=>{
				this.ratings=res.data.ratings;
			})
		},
		methods:{
			get(msg){
				this.selectType=msg;
			},
			select(index){
				if(this.selectType==2){
					return true
				}else if(this.selectType===index){
					return true
				}else{
					return false
				}
			},
			setTime(num){
			    let str='';
			    let time = new Date(num);
			    str+=time.getFullYear()+"-";
			    str+=time.getMonth()+"-";
			    str+=time.getDate()+"/";
			    str+=time.getHours()+":";
			    str+=time.getMinutes()+":";
			    str+=time.getSeconds()+"";
			    return str
			},
			getData(){
				this.visible=!this.visible;
			},
			getTxt(txt){
				if(this.visible){
					return this.visible
				}else{
					if(txt != ''){
						return true
					}
				}
			}
		},
		/*filters:{
			setTime(num,a){
			    let str='';
			    let time = new Date(num);
			    str+=time.getFullYear()+"-";
			    str+=time.getMonth()+"-";
			    str+=time.getDate()+"/";
			    str+=time.getHours()+":";
			    str+=time.getMinutes()+":";
			    str+=time.getSeconds()+"";
			    return `${a}: ${str}`
			}
		}*/
	}
</script>
<style scoped>
	.rat .main{
		display: flex;
		border-bottom: 2px solid #e6e7e8;
	}
	.rat .main .main-left{
		margin: 18px 0;
		width: 137.5px;
		text-align: center;
		border-right: 1px solid rgb(147,153,159);
		margin-right: 18px;
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.rat .main .main-left h1{
		font-size: 24px;
		line-height: 28px;
		color: rgb(255,153,0);
	}
	.rat .main .main-left p{
		margin-top: 6px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 12px;
	}
	.rat .main .main-left span{
		display: inline-block;
		margin-top: 8px;
		margin-bottom: 6px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.rat .main .main-right{
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.rat .main .main-right .server1{
		display: flex;
		margin-left: 12px;
		margin-right: 12px;
	}
	.rat .main .main-right .server1 span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.rat .main .main-right .server1 div{
		display: flex;
		margin-right: 12px;
	}
	.rat .main .main-right .server1 div img{
		width: 18px;
		height: 18px;
	}
	.rat .main .main-right .server1 a{
		color: rgb(255,153,0);
	}
	.rat .main .main-right .server2{
		display: flex;
		margin-left: 12px;
		margin-right: 12px;
	}
	.rat .main .main-right .server2 span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.rat .main .main-right .server2 div{
		display: flex;
		margin-right: 12px;
	}
	.rat .main .main-right .server2 div img{
		width: 18px;
		height: 18px;
	}
	.rat .main .main-right .server2 a{
		color: rgb(255,153,0);
	}
	.rat .main .main-right .time{
		margin-top: 8px;
		margin-left: 12px;
		margin-right: 12px;
	}
	.rat .main .main-right .time span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 18px;
		text-align: left;
	}
	.rat .main .main-right .time a{
		font-size: 12px;
		color: rgb(147,153,159);
		line-height: 18px;
	}
	.rat .space{
		width: 100%;
		height: 16px;
		background: #f3f5f7;
		border-bottom: 2px solid #e6e7e8;
	}
	.rat .content{
		display: flex;
		width: 90%;
		margin-left: 5%;
	}
	.rat .content a{
		margin-top: 14px;
		margin-bottom: 14px;
		font-size: 20px;
		color: #b7bbbf;
		margin-right: 7px;
	}
	.rat .content span{
		margin-top: 16px;
		margin-bottom: 16px;
		font-size: 12px;
		color: #93999f;
	}
	.rat .ratings{
		margin-left: 18px;
		margin-right: 18px;
	}
	.rat .ratings ul li{
		display: flex;
		border-bottom: 1px solid #ccc;
		padding: 18px 12px 6px 18px;
		width: 96%;
	}
	.rat .ratings ul li .img{
		width: 28px;
		height: 28px;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin-right: 12px;
	}
	.rat .ratings ul li .img img{
		width: 28px;
		height: 100%;
		border-radius: 50%;
	}
	.rat .ratings ul li .right{
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		text-align: left;
	}
	.rat .ratings ul li .right .name{
		width: 30%;
		text-align: left;
		height: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 12px;
		margin-right: 74px;
	}
	.rat .ratings ul li .right .starTime{
		display: flex;
		width: 100%;
		text-align: left;
	}
	.rat .ratings ul li .right .starTime star{
		float: left;
		width: 50%;
		text-align: left;
		margin-top: 4px;
	}
	.rat .ratings ul li .right .starTime .timer{
		float: right;
		margin-top: 10px;
	}
	.rat .ratings ul li .right .ratingsContent{
		width: 100%;
		text-align: left;
	}
	.rat .ratings ul li .right .goodName{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.rat .ratings ul li .right .goodName span{
		height: 20px;
		text-align: center;
		line-height: 20px;
		padding: 0 4px;
		font-size: 12px;
		border: 1px solid #ccc;
		margin-right: 4px;
	}
</style>