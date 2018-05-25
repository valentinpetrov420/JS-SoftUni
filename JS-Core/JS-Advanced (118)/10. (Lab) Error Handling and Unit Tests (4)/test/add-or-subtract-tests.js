let createCalculator = require('../add-or-subtract').createAddSubtractModule;
let expect = require('chai').expect;

describe("createAddSubtractModule()", function() {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return after {get}", function() {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return after {add2; add3;}", function() {
        calc.add(2); calc.add(3); let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return after {subtract 3 ; subtract 2;}", function() {
        calc.subtract(3); calc.subtract(2); let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return after {add 5.3 ; subtract 1.1;}", function() {
        calc.add(5.3); calc.subtract(1.1); let value = calc.get();
        expect(value).to.be.closeTo(4.4 , 0.5);
    });
    it("should return after {add 10 ; subtract 7; calc 2; subtract -1;}", function() {
        calc.add(10); calc.subtract(7); calc.add(-2); calc.subtract(-1); let value = calc.get();
        expect(value).to.be.equal(2);
    });
    it("should return after {add hello;}", function() {
        calc.add('hello'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return after {subtract hello;}", function() {
        calc.subtract('hello'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return after {subtract 0;}", function() {
        calc.subtract('0'); let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return  after {subtract -1;}", function() {
        calc.subtract('-1'); let value = calc.get();
        expect(value).to.be.equal(1);
    });
    it("should return  after {add 5-string;}", function() {
        calc.add('5');
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return  after {get hello;}", function() {
        calc.get('hello'); let value = calc.get();
        expect(value).to.be.equal(0);
    });
});