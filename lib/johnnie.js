// Load dependencies
var esprima     = require('esprima'),
    createNode  = require('./node');

// Use `cdir` if NODE_DEBUG is set as an enviromental variable
if (process.env.NODE_DEBUG) {
    console.dir = require('cdir');
}

function Johnnie() {
    this.comments = null;
    this.errors = null;
    this.root = null;
}

Johnnie.prototype = {

    constructor: Johnnie,

    parse: function (ast) {

        this.comments = ast.comments;
        this.errors = ast.errors;

        Object.keys(ast).forEach(function (k) {
            var node = createNode();
            node.type = ast[k].type;
        });
    }

};

module.exports = function (ast) {
    var walker = new Johnnie();
    return walker.parse(esprima.parse(ast));
};
