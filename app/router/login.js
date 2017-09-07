import login from '../controller/login.js';

module.exports = function(router) {
	router.get('/login', login.login);
};