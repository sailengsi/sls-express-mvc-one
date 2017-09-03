import root from './root/config';
import admin from './admin/config.js';
import api from './api/config.js';
import web from './web/config.js';

var _=require('lodash');

let default_config = {
	test    : 'test common config.js',
	router  : {
		namespace: '/'
	},
	database: true,
	db:{
		client    : 'mysql',
		connection: {
			host    : 'db.sls.com',
			user    : 'sls_express_mvc',
			password: 'sls_express_mvc',
			database: 'sls_express_mvc'
		}
	}
};


module.exports = {
	common: default_config,
	root  : _.merge({}, default_config, root),
	api   : _.merge({}, default_config, api),
	admin : _.merge({}, default_config, admin),
	web   : _.merge({}, default_config, web)
};