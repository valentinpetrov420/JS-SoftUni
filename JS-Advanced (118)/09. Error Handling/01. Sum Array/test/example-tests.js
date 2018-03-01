let expect = require('chai').expect;
const sumjs = require('../sum-array');

describe('Group', function() {
    it('Name of the test', function(){
        expect(sum([1, 2], 0, 1)).to.be.equal(3);
    })
});