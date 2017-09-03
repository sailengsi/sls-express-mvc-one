import router from './router/';
import {updateModelDatabase} from '../common';

module.exports = function(app, {
	config
}) {
	console.log('app admin index.js...');

	app.use(function(req,res,next) {
		updateModelDatabase(config);
		next();
	});

	app.use(config.router.namespace, router);
}