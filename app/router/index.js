var express = require('express');
var router = express.Router();

require('./article')(router);

module.exports = router;