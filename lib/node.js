
function Node(node) {
    this.node   = node;
    this.range  = [];
    this.loc    = {},
    this.type   = "";
}

Node.prototype.siblings = function () {};

Node.prototype.children = function () {};

Node.prototype.parent = function () {};

Node.prototype.remove = function () {};

Node.prototype.update = function () {};

// small factory to ensure `new` is used.
module.exports = function (node) { return new Node(); };
