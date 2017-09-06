import article from '../controller/article.js';

module.exports = function(router) {
	router.get('/article', article.getList);
	router.get('/article/:id', article.getView);
};