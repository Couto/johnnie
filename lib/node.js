
function Node(node) {
    this.node   = node;
    this.range  = [];
    this.loc    = {},
    this.type   = ""
}

Node.prototype.remove = function () {};

Node.prototype.update = function () {};

module.exports = function (node) {
    return new Node();
};
