var lib=require('./player.js').lib;
var expect=require('chai').expect;

describe('player',function(){
	it('should have properties',function(){
		var player = new lib.Player('anjaly');
		expect(player).to.have.all.keys('cards','bidPoints');
	});
	it('should have bidPoints field with properties',function(){
		var player = new lib.Player('anjaly');
		expect(player.bidPoints(16)).to.have.all.keys('ID','bidPoint');
		expect(player.bidPoints(16)).to.be.a('object');
	});
});