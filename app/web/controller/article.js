module.exports = {
	getList: function(req, res, next) {
		res.send([{
			id: 1,
			name: 'sai'
		}, {
			id: 2,
			name: 'leng'
		}]);
	},
	getView: function(req, res, next) {
		res.send({
			id: 1,
			name: 'sailengsi'
		});
	}
};