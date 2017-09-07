module.exports=function(req,res,next) {
	if(config.auth && config.auth.switch){
		if(!req.headers.token){
			res.send({
				status:403,
				msg:'token不存在！'
			});
		}else{
			next();
		}
	}else{
		next();
	}
};