import article from '../controller/article.js';

module.exports = function(router) {
	router.get('/article', article.list);
	router.get('/article/:id', article.view);
};