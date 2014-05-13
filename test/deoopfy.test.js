'use strict';
var test = require('tap').test;
var deoopfy = require('..');

test('deoopfy', function(t) {
  t.test('makes methods take the context as an argument', function(t) {
    var slice = deoopfy(Array.prototype.slice);
    var sliceRet = slice([1, 2, 3, 4], 2, 3);

    t.deepEqual(sliceRet, [3], 'slice([1, 2, 3, 4], 2, 3) => [3]');
    t.end();
  });
  t.end();
});
