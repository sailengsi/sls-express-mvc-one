module.exports = {
	router: {
		namespace: '/api'
	},

	database: true,
	db      : {
		client    : 'mysql',
		connection: {
			host    : 'db.sls.com',
			user    : 'sls_express_mvc',
			password: 'sls_express_mvc',
			database: 'sls_express_mvc'
		}
	}
};