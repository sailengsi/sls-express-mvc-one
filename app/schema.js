if(model){
	model.schema.hasTable('demo_test').then(exis=>{
		if(!exis){
			return model.schema.createTable('demo_test',t=>{
				console.log(t);
				t.increments('id').primary();
			});
		}
	});
}