if(model){
	model.schema.hasTable('demo_test').then(exis=>{
		if(!exis){
			return model.schema.createTable('demo_test',t=>{
				console.log(t);
				t.increments('id').primary();
				t.string('title');
				t.text('content','longtext');
			});
		}else{
			return model.schema.table('demo_test',t=>{
				console.log(t);
				// t.increments('id').primary();
				t.string('title');
				t.text('content','longtext');
			});
		}
	});
}