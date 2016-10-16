var db = require('mongodb').Db;
var server = require('mongodb').Server;
var connection = require('mongodb').Connection;

module.exports = new db('microblog', new server('localhost',
    connection.DEFAULT_PORT, {}));

