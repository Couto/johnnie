
// Node constructor
function Node() {

    this.range  = [];
    this.loc    = {},
    this.type   = '';
    this.node   = null;

    this.nodeParent     = null;
    this.nodeChildren   = null;
    this.nextSibling    = null;
    this.prevSibling    = null;

}

Node.prototype.next = function () {};

Node.prototype.previous = function () {};

Node.prototype.siblings = function () {};

Node.prototype.child = function () {};

Node.prototype.children = function () {};

Node.prototype.parent = function () {};

Node.prototype.remove = function () {};

Node.prototype.update = function () {};

// small factory to ensure `new` is used.
module.exports = Node;
