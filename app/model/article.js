class ArticleModel {

	constructor ({tableName}) {
		this.tableName = tableName;
	}

	async getList () {
		return await model.db(this.tableName).select().then((res) => {
			return res;
		}).catch((err) => {
			return err;
		});
	}

	async getView ({id}) {
		return await model.db(this.tableName).where({
			id
		}).then((res) => {
			return res;
		}).catch((err) => {
			return err;
		});
	}
}

module.exports = ArticleModel;