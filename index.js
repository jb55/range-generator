'use strict';

var take = require('take-generator');
var nats = require('naturals');

module.exports = range;

function* range(a, b) {
  var start, end;

  if (arguments.length >= 2) {
    start = a
    end = b
  } else {
    start = 0
    end = a
  }

  yield* take(nats.bind(null, start), end-start)();
}
