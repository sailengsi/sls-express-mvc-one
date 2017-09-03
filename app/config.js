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
			host    : '127.0.0.1',
			user    : 'root',
			password: 'sailengsi26sql_',
			database: 'sls_admin'
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