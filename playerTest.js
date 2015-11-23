var lib=require('./player.js').lib;
var expect=require('chai').expect;

describe('makeTwoTeams',function(){
	var players = ['anjaly','shruti','sanjit','ranju'];
	it('should have two teams',function(){
		expect(2).to.equal(lib.makeTwoTeams(players).length);
	});
	it('one team should have two players each',function(){
		expect(2).to.equal(lib.makeTwoTeams(players)[0].length);
		expect(2).to.equal(lib.makeTwoTeams(players)[1].length);
	});
});

describe('player',function(){
	it('should have properties',function(){
		var player = new lib.Player('anjaly');
		expect(player).to.have.all.keys('playerID','hand','bidPoints');
	});
	it('should have bidPoints field with properties',function(){
		var player = new lib.Player('anjaly');
		expect(player.bidPoints(16)).to.have.all.keys('ID','bidPoint');
		expect(player.bidPoints(16)).to.be.a('object');
	});
});
