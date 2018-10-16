var User = require('../models/users');
var mongoose = require('mongoose');


module.exports.insert = function(data) {
    return new Promise(function(resolve, reject) {
        var userData = new User(data);
        userData.save()
            .then(success => {
                return resolve(success);
            })
            .catch(err => {
                return reject(err);
            })
    });
};

module.exports.find = function() {
    return new Promise(function(resolve, reject) {
        User.find()
            .exec((err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(response);
            });
    });
};

module.exports.update = function(id, body) {
    return new Promise(function(resolve, reject) {
        let ObjectId = mongoose.Types.ObjectId(id);
        User.findByIdAndUpdate(ObjectId, body, function (err, response) {
            if (err) return reject(err);
            return resolve(response);
          });
    });
};

module.exports.delete = function(id) {
    return new Promise(function(resolve, reject) {
        let ObjectId = mongoose.Types.ObjectId(id);
        User.findByIdAndRemove(ObjectId)
            .then(response => {
                return resolve(response);
            })
            .catch(err => {
                return reject(err);
            })
    });
}