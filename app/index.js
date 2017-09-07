/**
 * 初始化配置
 */
import './config/';

/**
 * 导入模块，模块入口就是路由
 */
import router from './router/';

/**
 * 导入认证模块
 */
import auth from './auth';


module.exports = function(app) {
	app.use(auth);

	app.use(config.router.namespace, router);
};