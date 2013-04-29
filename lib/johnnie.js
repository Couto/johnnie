// Load dependencies
var esprima = require('esprima'),
    Node    = require('./node');

if (process.env.NODE_DEBUG) {
    console.dir = require('cdir');
}

function Johnnie() {
    this.root = null;
}

Johnnie.prototype = {

    constructor: Johnnie,

    parse: function (ast, current) {
        var node = new Node();

        node.type = ast.type;
        node.range = ast.range;
        node.loc = ast.loc;
        node.node = ast;
        node.parentNode = current || null;

        if (!node.parentNode) { this.root = node; }

        if (ast.body) {
            node.nodeChildren = node.nodeChildren || [];
            ast.body.forEach(function (child) {
                node.nodeChildren.push(this.parse(child, node));
            }.bind(this));
        } else if (ast.expression) {
            node.nodeChildren = node.nodeChildren || [];
            node.nodeChildren.push(this.parse(ast.expression, node));
        }

        return node;
    }

};

module.exports = function (ast) {
    var walker = new Johnnie();
    return walker.parse(ast);
};
