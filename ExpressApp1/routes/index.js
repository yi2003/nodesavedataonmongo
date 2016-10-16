
/*
 * GET home page.
 */

var user = require('../models/User.js');
exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.hello = function (req, res) {
    res.send('the time is '+new Date().toString());
}
exports.showusername = function (req, res) {
    res.send('user:' + req.params.username);
}

exports.adduser = function (req, res) {
    var username = req.params.username;

    var u = new user({ username: username, password: password } );

    u.save(function (err) {
        console.log(err);
    });

}