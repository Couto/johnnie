var assert = require('assert'),
    createNode = require('../lib/node'),
    typeOf = Object.prototype.toString;

module.exports = {
    'Node': {
        '#instantiation': {
            'throw if no range is present': function () {
                assert.throws(function () {
                    createNode({
                        loc: { start: [], end: [] },
                        type: 'CallExpression',
                        data: {}
                    });
                }, Error);
            },
            'throw if no loc is present': function () {
                assert.throws(function () {
                    createNode({
                        range: [26, 53],
                        type: 'CallExpression',
                        data: {}
                    });
                }, Error);
            },
            'throw if no type is present': function () {
                assert.throws(function () {
                    createNode({
                        range: [26, 53],
                        data: {}
                    });
                }, Error);
            },
            'throw if type is illegal': function () {
                assert.throws(function () {
                    createNode({
                        range: [26, 53],
                        type: 'WTFStatement'
                    });
                }, Error);
            }
        },
        '#next' : {
            'returns null if no siblings are present': function () {
                var node = createNode({
                    range: [26, 56],
                    loc: {},
                    type: 'DebuggerStatement'
                });

                assert.equal(node.next(), null);
            },
            'returns siblings if present': function () {
                // Create three random nodes
                var nodes = Array(3).map(function () {
                    return createNode({
                        type: 'MemberStatement',
                        range: [Math.random() * 100, Math.random() * 100],
                        loc: {
                            start: Math.random() * 100,
                            end: Math.random() * 100
                        },
                        data: Math.random().toString(36).substring(7)
                    });
                }).forEach(function (node, idx, arr) {
                    // Connnect all nodes as siblings;
                    node.prevSibling = arr[idx - 1] || null;
                    node.nextSibling = arr[idx + 1] || null;
                });

            }
        },
        '#previous' : {},
        '#siblings' : {},
        '#child' : {},
        '#children' : {},
        '#parent' : {},
        '#source' : {},
        '#update' : {}
    }
};
