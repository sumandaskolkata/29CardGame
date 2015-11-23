var lib=require('../player.js').lib;
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

describe('Player',function(){
	var player = new lib.Player('anjaly');
	it('should have properties',function(){
		expect(player).to.have.all.keys('playerID','hand','isBidder','hasPair');
	});
	it('should have bidPoints with properties',function(){
		expect(player.bidPoints(16)).to.have.all.keys('ID','bidPoint');
		expect(player.bidPoints(16)).to.be.a('object');
		expect(player.bidPoints(18).bidPoint).to.equal(18);
		expect(player.bidPoints(20).ID).to.equal('anjaly');
	});
	it('isBidder should be initialized with false',function(){
		expect(player.isBidder).to.be.false;
	});
	it('hasPair should be initialized with false',function(){
		expect(player.hasPair).to.be.false;
	});
});

describe('Team',function(){
	var team = new lib.Team(['anjaly','jishnu']);
	it('should have created player1 with 1st team member & player2 with 2nd team member',function(){
		expect(team.player1.playerID).to.equal('anjaly');
		expect(team.player2.playerID).to.equal('jishnu');
	})
	it('should have properties',function(){
		expect(team).to.have.all.keys('player1','player2','isPair','wonCardsBucket','score');
	});
	it('should have initially hasPair property false',function(){
		expect(team.isPair).to.be.false;
	});
	it('should have score initially with value 0',function(){
		expect(team.score).to.equal(0);
	});
	it('should increase the score when team wins',function(){
		team.score=2;
		var finalScore=team.scoreBoard(true);
		expect(team.score).to.equal(3);
	});
	it('should decrease the score when team loses',function(){
		team.score=2;
		var finalScore=team.scoreBoard(false);
		expect(team.score).to.equal(1);
	});

});
