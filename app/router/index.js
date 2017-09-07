var express = require('express');
var router = express.Router();

require('./article')(router);
require('./login')(router);
require('./test')(router);

module.exports = router;