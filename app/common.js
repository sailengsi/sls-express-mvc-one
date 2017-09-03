module.exports = {
	updateModelDatabase (config) {
		console.log(config);
		if (config && config.db && config.database === true) {
			var knex     = require('knex');
			global.model = knex(config.db);
		}
	}
};