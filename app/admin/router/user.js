import controller from '../controller/user.js';

module.exports = function(router) {
	router.get('/user', controller.list);
	router.get('/user/:id', controller.view);
};