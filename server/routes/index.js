'use strict';

const apiRoutes = require("./apis");

function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    server.get('/', function (req, res) {
        res.redirect('/api/v1/dogs');
    });

    server.use('/api', apiRoutes);
}

module.exports = {
    init: init
};
