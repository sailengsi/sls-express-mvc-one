import router from './router/';

module.exports = function(app, {
	config
}) {
	console.log('app root index.js...');

	app.use(config.router.namespace, router);
}