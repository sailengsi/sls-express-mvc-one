/**
 * 导入加密模块
 */
import {encryptByDES, decryptByDES} from '../common';

db.schema.hasTable(config.db.prefix+'user').then(exis=>{
	if(!exis){
		db.schema.createTable(config.db.prefix+'user',table=>{
			table.increments('id').primary();
			table.string('username',26).collate('utf8_general_ci');
			table.string('email',32).collate('utf8_general_ci');
			table.string('password',226).collate('utf8_general_ci');
			table.string('token',226).collate('utf8_general_ci');
			table.timestamp('create_time').defaultTo(db.fn.now());
		}).then(()=>{
			let init_userinfo={
				'username':'sailengsi',
				'password':encryptByDES('123456',config.crypto.key),
			};
			init_userinfo.token=encryptByDES(init_userinfo.password,init_userinfo.password);
			db(config.db.prefix+'user').insert(init_userinfo).then(res=>{
				console.log('insert success');
				console.log(res)
			}).catch(err=>{
				console.log('insert error');
				console.log(err);
			});
		}).catch(e=>{
			console.log(e);
		});
	}
});


db.schema.hasTable(config.db.prefix+'article').then(exis=>{
	if(!exis){
		db.schema.createTable(config.db.prefix+'article',table=>{
			table.increments('id').primary();
			table.integer('uid');
			table.string('title',26).collate('utf8_general_ci');
			table.text('content','longtext').collate('utf8_general_ci');
			table.timestamp('create_time').defaultTo(db.fn.now());
		}).catch(e=>{
			console.log(e);
		});
	}
});