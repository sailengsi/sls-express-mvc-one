import router from './router/';

module.exports = function(app, {
	config
}) {
	console.log('app api index.js...');

	app.use(config.router.namespace, router);
}