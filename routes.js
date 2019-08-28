var express = require('express');
var router = express.Router();

var sekolah_controller = require('./sekolah');

router.get('/sekolah', sekolah_controller.index);

module.exports = router;