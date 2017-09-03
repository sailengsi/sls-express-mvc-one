import config from './config.js';

import {updateModelDatabase} from './common';

module.exports = function(app) {
	// console.log(app);
	console.log('app index.js');

	app.use(function(req,res,next) {
		updateModelDatabase(config.common);
		require('./schema');
		next();
	});

	require('./root/')(app, {
		config: config.root
	});

	require('./api/')(app, {
		config: config.api
	});

	require('./admin/')(app, {
		config: config.admin
	});

}