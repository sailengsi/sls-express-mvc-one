module.exports = {
	list: function(req, res, next) {
		res.render('admin/view/article/list', {
			title: 'This Admin Article list page'
		});
	},
	view: function(req, res, next) {
		res.render('admin/view/article/view', {
			title: 'This Admin Article view page,id:'+req.params.id
		});
	}
};