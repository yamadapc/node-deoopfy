'use strict';
/**
 * Takes a function which acts on a context object, and returns a function which
 * takes the context as its first argument.
 *
 * @param {Function} method The method to "deOOP-fy".
 * @return {Function} fn The generated function.
 *
 * @example
 *   var slice = deoopfy(Array.prototype.slice);
 *   slice([1, 2, 3], 1) // => [2, 3]
 */

module.exports = function deoopfy(method) {
  var fn = function(obj, args) {
    args = Array.prototype.slice.call(arguments, 1);
    return method.apply(obj, args);
  };

  return fn;
};
