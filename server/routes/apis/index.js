'use strict';

const
    express = require('express'),
    v1Routes = require('./v1');

let router = express.Router();

router.use('/v1', v1Routes);

module.exports = router;
