import article from '../controller/article.js';

module.exports = function(router) {
	router.route('/article')
		.get(article.getList)
		.post(article.saveArticle)
		.put(article.updateArticle);
	router.route('/article/:id')
		.get(article.getView)
		.delete(article.deleteArticle);
};