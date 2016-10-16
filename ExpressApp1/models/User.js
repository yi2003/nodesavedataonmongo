var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}



module.exports = User;
User.prototype.save = function save(callback) {
    var user = {
        name = this.name,
        password = this.password
    };

    mongodb.open(function (err, db) {

        db.collection('users', function (err, collection) {
            collection.insert(user, function (err, result) {
                mongodb.close();
                callback(err, result);
            });

        });
    });
}