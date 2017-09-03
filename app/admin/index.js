import router from './router/';

module.exports = function(app, {
	common,
	config
}) {
	console.log('app admin index.js...');

	app.use(config.router.namespace, router);
}