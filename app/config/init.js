import config from './config';

if (!global.config) {
	global.config = config;
}
if (!global.db) {
	global.db = {};
}

if(config.db && config.db.switch===true && config.db.info){
	var knex=require('knex');
	db=knex(config.db.info);

	if(config.db.schema){
		require('./schema');
	}
}
