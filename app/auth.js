module.exports=function(req,res,next) {
	console.log(req.headers);
	if(!req.headers.token){
		res.send({
			status:403,
			msg:'token不存在！'
		});
	}else{
		next();
	}
}