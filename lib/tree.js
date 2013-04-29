var createNode = require('./node');

// a tree data structure
function Tree() {
    this.root = null;
    this.pointer = null;
}

Tree.prototype = {

    constructor: Tree,

    /**
     * @api public
     * @method
     * @param {Function} cb a function that will be called at each node
     * @chainable
     */
    walkPreOrder: function (cb) {
        // A walk in which each parent node is traversed before its children
        return cb;
    },

    /**
     * @api public
     * @method
     * @param {Function} cb a function that will be called at each node
     * @chainable
     */
    walkPostOrder: function (cb) {
        // a walk in which the children are traversed before their respective parents
        return cb;
    },

    /**
     * @api public
     * @method
     * @param {Function} cb a function that will be called at each node
     * @chainable
     */
    walkInOrder: function (cb) {
        // a walk in which a node's left subtree, then the node itself, and finally
        // its right subtree are traversed
        return cb;
    },

    /**
     * @api public
     * @method
     * @param {Function} cb a function that will be called at each node
     * @chainable
     */
    walkLevelOrder: function (cb) {
        // performs a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
        // over the entirety of a tree; nodes are traversed level by level,
        // where the root node is visited first, followed by its direct child nodes
        // and their siblings, followed by its grandchild nodes and their siblings,
        // etc., until all nodes in the tree have been traversed.
        return cb;
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    prune: function () {
        // removes a whole section of a tree
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    graft: function () {
        var children = [].slice.call(arguments, 0),
            len = children.length,
            i = 0,
            parent = this.pointer,
            lastChild = (parent.children()) ?
                    parent.child(parent.children().length - 1) :
                    null;

        for (i; i < len; i += 1) {
            children[i].nextSibling = children[i + 1] || null;
            children[i].prevSibling = children[i - 1] || null;
        }

        if (lastChild) {
            lastChild.nextSibling = children[0];
            children[0].prevSibling = lastChild;
        } else {
            parent.nodeChildren = children;
        }

        return this;
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    addChild: function (data) {
        var node = createNode(data);
        // if there's no root, then it's pretty obvious that we insert the data there
        if (!this.root) {
            this.root = node;
            this.pointer = this.root;
        } else {
            // otherwise the pointer must be set
            this.pointer.nodeChildren = this.pointer.nodeChildren || [];
            node.nodeParent = this.pointer;
            this.pointer.nodeChildren.push(node);
            this.pointer = node;
        }

        return this;
    },

    addSibling: function (data) {
        var node = createNode(data);

        node.prevSibling = this.pointer;

        this.pointer.nextSibling = node;
        this.pointer = node;

        return this;
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    search: function () {
        // searchs a node in the tree
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    enumerate: function () {
        // lists all items
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    enumarateSection : function () {
        // lists all sections
    }

};

// small factory to ensure `new` is used.
module.exports = function () { return new Tree(); };
