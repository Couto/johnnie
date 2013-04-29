var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    johnnie = require('../index.js'),
    fixture = function (name, ext) {
        var folder = __dirname + path.sep + 'fixtures' + path.sep,
            extension = ext || '.js';

        return fs.readFileSync(folder + name + extension);
    };

module.exports = {
    'johnnie': {
        'is ok': function () {
            var walker = johnnie(fixture('life'));
            assert.ok(walker);
        }
    }
};
