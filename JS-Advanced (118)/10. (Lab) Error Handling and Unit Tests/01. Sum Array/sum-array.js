function sum(arr, startIndex, endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

module.exports = { sum };

let expect = require('chai').expect;

describe('Group', function() {
    it('Name of the test', function(){
        expect(sum([1, 2], 0, 1)).to.be.equal(0);
    })
});