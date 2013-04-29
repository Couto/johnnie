// Load dependencies
var esprima = require('esprima'),
    fs = require('fs'),
    untested = function (unit) {
        return false;
    };

module.exports = function (data) {
    return esprima.parse(data);
};
