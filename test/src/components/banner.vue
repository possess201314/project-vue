<template>
    <div class="business">
        <div class="pic" ref="wrapper">
            <ul ref="content">
                <li v-for="(item,index) in pics" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    data(){
        return {
            pics: []
        }
    },
    mounted(){
        this.getDatas()
        setTimeout(()=>{
            this.init()
        },100)
    },
    methods:{
        init(){
            let con = this.$refs.content           
            var items = con.children
            let w = items.length * 50 + '%'
            con.style.width = w
            for(let i=0; i<items.length; i++){
                  items[i].style.width = 1/items.length * 100 + '%'
            };
            var bs = new Bscroll(this.$refs.wrapper,{
                scrollX:true,
                scrollY: false,
                probeType: 3
            })
        },
        getDatas(){
            this.$http.get('/static/data/seller.json').then(res=>{
                this.datas = res.data.data
                this.pics = res.data.data.pics
                console.log(this.datas)
            })
        }
    }
}
</script>
<style scoped>
	.business{
	    position: absolute;
	    width:100%;
	    overflow: hidden;
	    top:200px;
	}
	.business ul{
		width:200%;
	}
	.business ul li{
		float:left;
		width:20%;
	}
</style>