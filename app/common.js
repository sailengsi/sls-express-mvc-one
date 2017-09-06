module.exports = {
	updateModelDatabase (config) {
		if (config && config.db && config.database === true) {
			var knex     = require('knex');
			model.db = knex(config.db);
		}
	}
};