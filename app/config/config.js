module.exports = {
	/**
	 * 路由配置
	 */
	router: {
		namespace: '/api'
	},

	/**
	 * 加密解密配置
	 */
	crypto: {
		key: 'https://sailengsi.com&https://github.com/sailengsi&https://git.oschina.net/sailengsi'
	},

	/**
	 * 认证配置
	 */
	auth: {
		switch: false
	},

	/**
	 * 数据库配置
	 */
	db: {
		switch: true,
		schema: true,
		info  : {
			client    : 'mysql',
			connection: {
				host    : 'db.sls.com',
				user    : 'sls_express_mvc',
				password: 'sls_express_mvc',
				database: 'sls_express_mvc'
			},
		},
		prefix: 'sls_express_',
	}
};