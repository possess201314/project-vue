<template>
	<i class='icon' :class='iconClass' :style='parsedSize'></i>
</template>
<script>
	export default{
		name:'icon',
		props:{
			name:{
				type:String,
				required:true
			},
			size:{
				type:Object,
				required:true
			}
		},
		computed:{
			iconClass(){
				return 'icon-'+this.name;
			}
		},
		created(){
			this.parsedSize={};
			for(let k in this.size){
				this.parsedSize[k]=parseFloat(this.size[k])+'px';
			}
		}
	}
</script>
<style scoped>
	.icon{
		display: inline-block;
		vertical-align: top;
		background-size: cover;
	}
	.icon.icon-brand{
		background-image: url('./brand@2x.png');
	}
	.icon.icon-bulletin{
		background-image: url('./bulletin@2x.png');
	}
	.icon.icon-decrease{
		background-image: url('./decrease_1@2x.png');
	}
	.icon.icon-discount{
		background-image: url('./discount_1@2x.png');
	}
	.icon.icon-special{
		background-image: url('./special_1@2x.png');
	}
	.icon.icon-guarantee{
		background-image: url('./guarantee_1@2x.png');
	}
	.icon.icon-invoice{
		background-image: url('./invoice_1@2x.png');
	}
</style>