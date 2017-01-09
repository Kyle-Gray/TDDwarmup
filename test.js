'use strict';

let assert = require('assert');
let index = require('./index');

describe('Array', function(){
  describe('Sum of [1,2,3,4] + (array[i] + 1)', function(){
    it('should return 14', function(){
      assert.equal(14, index.plusOneSum([1,2,3,4]));
    });
  });
});


describe('Array', function(){
  describe("Sum of [1,2,3,'a'] + (array[i] + 1)", function(){
    it('should error because of string a', function(){
      assert.equal(undefined, index.plusOneSum([1,2,3,'a']));
    });
  });
});
