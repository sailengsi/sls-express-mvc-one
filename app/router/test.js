import test from '../controller/test.js';

module.exports = function(router) {
	router.get('/page/index', test.index);
	router.get('/page/login', test.login);
	router.get('/page/article', test.listArticle);
	router.get('/page/article/[0-9]{1,11}', test.viewArticle);
	router.get('/page/article/add', test.addArticle);
};