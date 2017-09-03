import controller from '../controller/root.js';

module.exports = function(router) {
	router.get('/', controller.root);
	router.get('/home', controller.home);
	router.get('/about', controller.about);
};