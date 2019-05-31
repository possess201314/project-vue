let express=require('express');
let fs=require('fs');
let bodyParser=require('body-parser');
let app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.listen(9090,()=>{
	console.log('服务器启动成功');
})
app.get('/',(req,res)=>{
	res.send('123');
})
app.post('/code',(req,res)=>{
	code=getCodes();
	let iphoneReg=/^1[3-9]\d{9}$/;
	console.log(req.body.userName);
	if(iphoneReg.test(req.body.userName)){
		res.send({
			code: code,
			msg: '验证码已发送'
		})
	}else{
		res.send({
			code: 1,
			msg: '手机号不正确'
		})		
	}
})
app.post('/login',(req,res)=>{
	let iphoneReg=/^1[3-9]\d{9}$/;
	let phone=req.body.userName;
	if(phone===''){
		res.send({
			code: 1,
			msg: '用户名不能为空'
		})
	}else if(iphoneReg.test(phone)){
			res.send({
				code: 0,
				msg: '登录成功'
			})
	}else{
		res.send({
			code: 2,
			msg: '用户名错误'
		});		
	}
	/*if(req.body.userName===''){
		res.send({
			code: 1,
			msg: '用户名不能为空'
		})
	}else if(req.body.userName!='wang'){
		res.send({
			code: 2,
			msg: '用户名错误'
		})	
	}else{
		res.send({
			code: 0,
			msg: '登录成功'
		})	
	}*/
})
/*app.get('/dataList',(req,res)=>{
	fs.readFile('./static/data.json',(err,data)=>{
		res.send(JSON.parse(data))
	});
})*/
app.post('/login1',(req,res)=>{
	res.send('123');
})
app.post('/main',(req,res)=>{
	fs.readFile('./static/data.json',(err,data)=>{
		res.send(JSON.parse(data));
	})
})
function getCodes(){
	var arr=[];
	for(var i=48;i<=57;i++){
		arr.push(String.fromCharCode(i));
	}
	for(var i=65;i<=90;i++){
		arr.push(String.fromCharCode(i));
	}
	for(var i=97;i<=122;i++){
		arr.push(String.fromCharCode(i));
	}
	var code=[];
	while(code.length<4){
		var x=Math.floor(Math.random()*(arr.length-1-0+1)+0);
		if(code.indexOf(arr[x])==-1){
			code.push(arr[x]);
		}
	}
	return code.join("");
}