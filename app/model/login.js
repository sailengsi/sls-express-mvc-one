import {encryptByDES} from '../common';

class LoginModel {

	constructor ({tableName}) {
		this.tableName = config.db.prefix + tableName;
	}

	async login ({username, password}) {
		var password = encryptByDES(password, config.crypto.key);
		return await db(this.tableName).where({
			username,
			password
		}).then((res) => {
			return res;
			/*return res.length ? res[0] : {
				status:1,
				msg:'账号或密码错误！'
			};*/
		}).catch((err) => {
			return err;
		});
	}
}

module.exports = LoginModel;