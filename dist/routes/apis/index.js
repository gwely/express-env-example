'use strict';
const express = require('express'), v1ApiController = require('./v1');
let router = express.Router();
router.use('/v1', v1ApiController);
module.exports = router;
//# sourceMappingURL=index.js.map