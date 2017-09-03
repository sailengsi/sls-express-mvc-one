import router from './router/';
import {updateModelDatabase} from '../common';
module.exports = function(app, {
	config
}) {
	console.log('app api index.js...');
	updateModelDatabase(config);

	app.use(config.router.namespace, router);
}