var assert = require('assert'),
    createNode = require('../lib/node');

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
                var nodes = [null, null, null].map(function () {
                    return createNode({
                        type: 'MemberExpression',
                        range: [Math.random() * 100, Math.random() * 100],
                        loc: {
                            start: Math.random() * 100,
                            end: Math.random() * 100
                        },
                        data: Math.random().toString(36).substring(7)
                    });
                }).map(function (node, idx, arr) {
                    // Connect nodes as siblings
                    node.nextSibling = arr[idx + 1] || null;
                    return node;
                });

                // Assert brotherhood
                assert.deepEqual(nodes[0].next(), nodes[1]);
                assert.deepEqual(nodes[1].next(), nodes[2]);
                assert.deepEqual(nodes[2].next(), null);

            }
        },
        '#previous' : {
            'returns null if no siblings are present': function () {
                var node = createNode({
                    range: [26, 56],
                    loc: {},
                    type: 'DebuggerStatement'
                });

                assert.equal(node.previous(), null);
            },
            'returns siblings if present': function () {
                // Create three random nodes
                var nodes = [null, null, null].map(function () {
                    return createNode({
                        type: 'MemberExpression',
                        range: [Math.random() * 100, Math.random() * 100],
                        loc: {
                            start: Math.random() * 100,
                            end: Math.random() * 100
                        },
                        data: Math.random().toString(36).substring(7)
                    });
                }).map(function (node, idx, arr) {
                    // Connect nodes as siblings
                    node.prevSibling = arr[idx - 1] || null;
                    return node;
                });

                // Assert brotherhood
                assert.deepEqual(nodes[2].previous(), nodes[1]);
                assert.deepEqual(nodes[1].previous(), nodes[0]);
                assert.deepEqual(nodes[0].previous(), null);

            }
        },
        '#siblings' : {},
        '#child' : {},
        '#children' : {},
        '#parent' : {},
        '#source' : {},
        '#update' : {}
    }
};
