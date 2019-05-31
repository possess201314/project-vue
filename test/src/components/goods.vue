<template>
	<div class="goods">
		<div class="main">
			<scroll class="menu">
				<ul>
					<li v-for='item,index of goods' @click='goItem(index)' :key='item.name' class='goods-item' :class='{"active":currentIndex===index}'>
						<icon v-if='item.type===2' name='special' :size='{width:22,height:12}'/>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</scroll>
			<scroll class="goods-list" ref='goodList'>
				<div>
					<ul v-for='item of goods' ref='list'>
						<li>
							<h3>{{item.name}}</h3>
						</li>
						<li v-for='items of item.foods'>
							<div class="mainList">
								<img :src='items.icon' class='img' @click='goDetails(items)'>
								<description :food='items'></description>
							</div>
						</li>
					</ul>
				</div>
			</scroll>
			<shop :sel='show' :data='curData' @changeType='type'></shop>
		</div>
	</div>
</template>
<script>
	//import BScroll from 'better-scroll'
	import scroll from './scroll.vue'
	import shop from './shopSepc.vue'
	export default{
		name:'goods',
		components:{scroll,shop},
		data(){
			return{
				goods:[],
				//currentIndex:0,
				rightScroll:{},
				scrollY:0,
				heightArr:[],
				show:false,
				curData: {}
			}
		},
		created(){
			this.$http.post('/apis/main').then(res=>{
				this.goods=res.data.goods;
			})		
		},
		computed:{
			currentIndex(){
				for(let i=0;i<this.heightArr.length;i++){
					let height1=this.heightArr[i];
					let height2=this.heightArr[i+1];
					if(this.scrollY>=height1 && this.scrollY<height2){
						return i;
					}
				}
				return 0
			}
		},
		methods:{
			init(){
				//let bs=new BScroll(this.$refs.goodList)
				/*this.rightScroll=new BScroll(this.$refs.goodList,{
					click: true,
					probeType: 3
				});*/
				this.rightScroll = this.$refs.goodList.bs;
				this.rightScroll.on('scroll',pos=>{
					this.scrollY=Math.abs(Math.round(pos.y))
				})
			},
			pushArr(){
				let height=0;
				this.heightArr.push(height);
				let listArr=this.$refs.list;
				for(let i=0;i<listArr.length;i++){
					height += listArr[i].clientHeight;
					this.heightArr.push(height);
				}
			},
			goItem(index){
				let list=this.$refs.list;
				let el=list[index];
				this.rightScroll.scrollToElement(el,300);
			},
			goDetails(item) {
				this.show = true
				this.curData = item
			},
			type(res){
				this.show=res
			}

		},
		mounted(){
			setTimeout(()=>{
				this.init();
				this.pushArr();
			},1000)
		}
	}
</script>
<style scoped>
	.goods .main{
		display: flex;
		margin-bottom: 100px
	}
	.goods .main .menu{
		width: 80px;
	}
	.goods .main .menu ul .goods-item{
		position: relative;
		display: flex;
		align-items: center;
		height: 54px;
		padding: 0 12px;
		box-sizing: border-box;
		font-size: 12px;
		background: #f3f5f7;
	}
	.goods .main .menu ul .goods-item.active{
		background: #fff;
	}
	.goods .main .menu ul .goods-item.active::after{
		background: #fff;
	}
	i{
		margin-top: -18px;
	}
	.goods .main .menu ul .goods-item::after{ 
		content: '';
		position: absolute;
		bottom: 0;
		left: 12px;
		width: 56px;
		height: 1px;
		background: rgba(7,17,27,.1);
	}
	.goods .main .goods-list{
		overflow: hidden;
		flex: 1;
		width: 100%;
		height: 70vh;
	}
	.goods .main .goods-list ul{
		width: 100%;
	}
	.goods .main .goods-list ul li{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		text-align: left;
	}
	.goods .main .goods-list ul li h3{
		width: 100%;
		height: 26px;
		line-height: 26px;
		background: #f3f5f7;
		padding-left: 14px;
		font-size: 12px;
		color: rgb(147,153,159);
	}
	.goods .main .goods-list ul li .mainList{
		display: flex;
		flex: 1;
		padding: 18px 18px;
		background: #fff;
	}
	.goods .main .goods-list ul li .img{
		width: 57px;
		height: 57px;
		margin-right: 10px;
		background: #f00;
	}
</style>