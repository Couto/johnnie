// a tree data structure
function Tree() {}

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
    },

    /**
     * @api public
     * @method
     * @param {Function} cb a function that will be called at each node
     * @chainable
     */
    walkPostOrder: function (cb) {
        // a walk in which the children are traversed before their respective parents

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
        // adds a whole section to a tree
    },

    /**
     * @api public
     * @method
     * @param {type} [name] description
     * @chainable
     */
    add: function () {
        // adds a new node at a certain position
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
