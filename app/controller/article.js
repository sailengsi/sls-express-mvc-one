import ArticleModel from '../model/article';

let Article = new ArticleModel({
	tableName: 'demo_article'
});

module.exports = {
	getList: function(req, res, next) {
		Article.getList().then(data => {
			/*res.send([{
				id: 1,
				name: 'sai'
			}, {
				id: 2,
				name: 'leng'
			}]);*/
			// res.send(data);
			res.send(data);
		});
	},
	getView: function(req, res, next) {
		Article.getView({id: req.params.id}).then(data => {
			res.send(data);
		});
	}
};