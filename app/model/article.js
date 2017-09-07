class ArticleModel {

	constructor ({tableName}) {
		this.tableName = config.db.prefix + tableName;
	}

	async getList () {
		return await db(this.tableName).select().then((res) => {
			return res;
		}).catch((err) => {
			return err;
		});
	}

	async getView ({id}) {
		return await db(this.tableName).where({
			id
		}).then((res) => {
			return res;
		}).catch((err) => {
			return err;
		});
	}

	async saveArticle ({title,content}) {
		return await db(this.tableName).insert({
			title,
			content
		}).then((res) => {
			return res;
		}).catch((err) => {
			return err;
		});
	}

	async updateArticle ({id,title,content}) {

	}

	async deleteArticle ({id}) {

	}
}

module.exports = ArticleModel;