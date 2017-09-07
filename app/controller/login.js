import LoginModel from '../model/login';

let Login = new LoginModel({
	tableName: 'user'
});

module.exports = {
	login: function(req, res, next) {
		Login.login({
			username:'sailengsi',
			password:'123456'
		}).then(data => {
			res.send(data);
		});
	}
};