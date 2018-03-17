let makeList = require('../list-removing-adding-moving');
let expect = require('chai').expect;

describe("makeList()", function(){
    let list = {};
    beforeEach(function(){
        list = makeList();
    });
    it("methods exist", function(){
        expect(list.addLeft).to.exist;
        expect(list.addRight).to.exist;
        expect(list.clear).to.exist;
        expect(list.toString).to.exist;
    });
    it('clear works properly', function(){
        list.addLeft('test');
        list.clear();
        expect(list.toString()).to.equal('');
    });
    it('clear works properly 2', function(){
        list.addLeft('test');
        list.clear();
        list.addLeft('test');
        expect(list.toString()).to.equal('test');
    });
    it('addRight works properly', function(){
        list.addRight('test1');
        list.addRight('test2');
        expect(list.toString()).to.equal('test1, test2');
    });
    it('addLeft works properly 2', function(){
        list.addRight('test1');
        list.addLeft('test2');
        expect(list.toString()).to.equal('test2, test1');
    });
});