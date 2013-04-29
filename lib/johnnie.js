// Load dependencies
var esprima = require('esprima'),
    fs = require('fs'),
    node = require('./node'),
    untested = function (unit) {
        return false;
    };

module.exports = function (data) {
    return esprima.parse(data);
};
