<template>
	<div class="reg">
		<h2>用户注册</h2>
		<form>
			<div class='userName'>
				<input type='text' placeholder='用户名'>
			</div>
			<div class="password">
				<input type='password' placeholder='密码'>
			</div>
			<div class="word">
				<input type='password' placeholder='确认密码'>
			</div>
			<div class="txt">
				<input type='checkbox'>条款已阅读
			</div>
			<div class="btn">
				<a>注册</a>
			</div>
			<div class="content">
				<router-link class='regs' :to='{path:"/login"}'>已有账号，去登录</router-link>
			</div>
		</form>
	</div>
</template>
<script>
	export default{
			
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
	.reg form .userName, .password, .word{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 60px;
		background: #f3f3f3;
		margin-bottom: 30px;
	}
	.reg form .userName input{
		padding-left: 20px;
	}
	.reg form .password input{
		padding-left: 20px;
	}
	.reg form .word input{
		padding-left: 20px;
	}
	.reg form .txt{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		padding-left: 5%;
	}
	.reg form .btn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 60px;
		background: #999;
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