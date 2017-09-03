import config from './config.js';

module.exports = function(app) {
	// console.log(app);
	console.log('app index.js');

	require('./root/')(app, {
		common: config.common,
		config: config.root
	});

	require('./api/')(app, {
		common: config.common,
		config: config.api
	});

	require('./admin/')(app, {
		common: config.common,
		config: config.admin
	});


}