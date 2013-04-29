var esprima = require('esprima');

// Node constructor
function Node(data) {

    this.range  = data.range;
    this.loc    = data.loc,
    this.type   = esprima.Syntax[data.type]; // ensure valid type
    this.data   = data;

    if (!this.range) { throw new Error('range must be present in data'); }
    if (!this.loc)   { throw new Error('loc must be prensent in data');  }
    if (!this.type)  { throw new Error('type must be present in data');  }

    this.nodeParent     = null;
    this.nodeChildren   = null;
    this.nextSibling    = null;
    this.prevSibling    = null;

}

Node.prototype = {

    constructor: Node,

    next : function () { return this.nextSibling; },

    previous : function () { return this.prevSibling; },

    siblings : function () {

        var siblings = [],
            prevNode = this.prevSibling,
            nextNode = this.nextSibling;

        // start by adding the pointer node
        siblings.push(this);

        // now add to the beginning of the array,
        // all previous nodes
        while (prevNode) {
            siblings.unshift(prevNode);
            prevNode = prevNode.prevSibling;
        }

        // and finally add to the end of the array,
        // all nodes after the pointer
        while (nextNode) {
            siblings.push(nextNode);
            nextNode = nextNode.nextSibling;
        }

        // return the array without changing the pointer
        return siblings;

    },

    child : function (idx) {
        idx = idx || 0;

        if (this.nodeChildren && this.nodeChildren[idx]) {
            return this.nodeChildren[idx];
        }
    },

    children : function () { return this.nodeChildren; },

    parent : function () { return this.nodeParent; },

    source : function () {},

    update : function () {}

};

module.exports = function (data) {
    return new Node(data);
};
