module.exports = {
	root : function(req, res, next) {
		res.render('root/view/root', {
			title: 'This Root / page'
		});
	},
	home : function(req, res, next) {
		res.render('root/view/home', {
			title: 'This Root home page'
		});
	},
	about: function(req, res, next) {
		res.render('root/view/about', {
			layout: 'root/view/layout',
			title : 'This Root about page'
		});
	}
};