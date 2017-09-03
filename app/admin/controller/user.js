import UserModel from '../model/user';

let User       = new UserModel({
	tableName: 'sls_blog_article'
});
module.exports = {
	list: function(req, res, next) {
		User.getList().then(data => {
			res.send(data);
		});
	},
	view: function(req, res, next) {
		User.getView({
			id: req.params.id
		}).then(data => {
			res.send(data);
		});
	}
};