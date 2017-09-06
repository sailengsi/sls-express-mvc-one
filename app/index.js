import config from './config.js';
import router from './router/';
import {updateModelDatabase} from './common';

import auth from './auth';

global.model = {};

module.exports = function(app) {

	updateModelDatabase(config);

	app.use(auth);

	app.use(config.router.namespace, router);

};