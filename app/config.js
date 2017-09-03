import root from './root/config';
import admin from './admin/config.js';
import api from './api/config.js';
import web from './web/config.js';


let default_config = {
	test: 'test common config.js',
	router: {
		namespace: '/'
	}
};


module.exports = {
	common: default_config,
	root: Object.assign({}, default_config, root),
	api: Object.assign({}, default_config, api),
	admin: Object.assign({}, default_config, admin),
	web: Object.assign({}, default_config, web)
};