'use strict';

var expect = require('expect.js')
var range = require('./');

describe('range-generator', function(){

  it('two arguments works', function(){
    let r = range(1, 4);
    expect(r.next().value).to.be(1)
    expect(r.next().value).to.be(2)
    expect(r.next().value).to.be(3)
    expect(r.next().done).to.be(true)
  });

  it('one argument works', function(){
    let r = range(3);
    expect(r.next().value).to.be(0)
    expect(r.next().value).to.be(1)
    expect(r.next().value).to.be(2)
    expect(r.next().done).to.be(true)
  });

});
