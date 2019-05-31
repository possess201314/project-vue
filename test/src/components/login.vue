<template>
	<div class="reg">
		<h2>用户登录</h2>
		<p v-show='msg'>{{msg}}</p>
		<form>
			<div class='userName'>
				<input type='text' placeholder='请输入手机号' v-model='userName'>
			</div>
			<div class="authCode">
				<div class="code">
					<input type='text' placeholder='请输入验证码' v-model='code'>
				</div>
				<div class="getCode" v-show='getCode' @click='getCodes()'>获取验证码</div>
				<span v-show='!getCode'>{{num}}秒后重新获取</span>
			</div>
			<div class="btn" @click='login()'>
				<a>登录</a>
			</div>
			<div class="content">
				<router-link class='regs' :to='{name:"Reg"}'>还没有账号，现在去注册</router-link>
			</div>
		</form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				userName:'',
				codeTxt:'',
				code:'',
				getCode:true,
				timer:null,
				msg:'',
				num:6
			}
		},
		methods:{
			getCodes(){
				this.$http.post('/apis/code',{userName:this.userName}).then(res=>{
					this.codeTxt=res.data.code;
					console.log(this.codeTxt);
					if(this.codeTxt===1) return
					this.getCode=false;
					this.timer=setInterval(()=>{
						this.num--;
						if(this.num===0){
							this.getCode=true;
							clearInterval(this.timer);
						}
					},1000)
				})
			},
			login(){
				let regPhone=/^1[3-9]\d{9}$/;
				if(this.userName===''){
					this.msg='用户名不能为空'
				}else if(regPhone.test(this.userName) && this.code===this.codeTxt){
					this.$http.post('/apis/login ',{userName:this.userName}).then(res=>{
						this.msg=res.data.msg;
						if(res.data.code===0){
							setTimeout(()=>{
								this.$router.push({
									path:'/main'
								})
							},1000)
						}
					})
				}else{
					this.msg='用户名错误'
				}
			}
		}	
	}
</script>
<style scoped>
	.reg{
		width: 100%;
		height: 100vh;
		background: #ccc;
	}
	.reg h2{
		width: 100%;
		height: 74px;
		text-align: center;
		line-height: 74px;
	}
	.reg form{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 57px;
	}
	.reg form .userName{
		display: flex;
		align-items: center;
		width: 90%;
		height: 41px;
		border: 1px solid #ccc;
		background: #f3f3f3;
		margin-bottom: 39px;
	}
	.reg form .userName input{
		padding-left: 10px;
		font-size: 16px;
	}
	.reg form .authCode{
		display: flex;
		justify-content: space-around;
		width: 90%;
		margin-bottom: 30px;
	}
	.reg form .authCode .code{
		flex: 1;
		height: 41px;
		line-height: 41px;
		background: #f3f3f3;
		border: 1px solid #ccc;
		margin-right: 10px;
	}
	.reg form .authCode .code input{
		padding-left: 10px;
		font-size: 16px;
	}
	.reg form .authCode .getCode{
		width: 220px;
		height: 40px;
		line-height: 40px;
		background: #999;
		font-size: 12px;
		border: 1px solid #ccc;
	}
	.reg form .btn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 60px;
		background: #2a97fe;
		margin-top: 36px;
	}
	.reg form .btn a{
		font-size: 20px;
		color: #fff;
	}
	.reg form .content{
		margin-top: 66px;
	}
	.reg form .content .regs{
		color: #6eace6;
	}
</style>