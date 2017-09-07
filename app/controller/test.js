module.exports = {
	index      : function(req, res, next) {
		console.log('page index')
		res.render('view/test/index');
	},
	login      : function(req, res, next) {
		res.render('view/test/login');
	},
	listArticle: function(req, res, next) {
		res.render('view/test/list-article');
	},
	viewArticle: function(req, res, next) {
		res.render('view/test/view-article');
	},
	addArticle : function(req, res, next) {
		res.render('view/test/add-article');
	}
};