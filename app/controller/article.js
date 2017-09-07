import ArticleModel from '../model/article';

let Article = new ArticleModel({
	tableName: 'article'
});

module.exports = {
	getList (req, res, next) {
		Article.getList().then(data => {
			res.render('view/test/list-article', {
				list: data
			});
		});
	},
	getView (req, res, next) {
		Article.getView({id: req.params.id}).then(data => {
			res.send(data);
		});
	},
	saveArticle (req, res, next) {
		if (!req.body.title || !req.body.content) {
			res.send({
				status: 1,
				msg   : '文章标题和内容不能为空'
			});
		} else {
			Article.saveArticle(req.body).then(data => {
				res.redirect('/api/article');
			}).catch(err => {
				res.send(err);
			});
		}
	},
	updateArticle (req, res, next) {

	},
	deleteArticle (req, res, next) {

	}
};