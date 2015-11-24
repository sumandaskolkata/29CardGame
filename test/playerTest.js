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
		expect(player).to.have.all.keys('playerID','hand','isBidder','hasPair','isTrumpSetter');
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
	it('should have pair of trump in hand',function(){
		       var hand=[ { suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
					      { suit: 'Spade', name: 'King', rank: 5, point: 0 },
  					      { suit: 'Spade', name: 'Queen', rank: 6, point: 0 },
  					      { suit: 'Diamond', name: 'Jack', rank: 1, point: 3 },
  					      { suit: 'Diamond', name: 9, rank: 2, point: 2 },
  					      { suit: 'Spade', name: 'Ace', rank: 3, point: 1 },
  					      { suit: 'Spade', name: 10, rank: 4, point: 1 },
  					      { suit: 'Spade', name: 7, rank: 8, point: 0 }];
  		expect(player.checkPair(hand,'Spade')).to.be.true;
	})
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
	it('should have calculate the total points of a trick',function(){
		var wonCardsBucket=[{ suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
							 { suit: 'Spade', name: 9, rank: 2, point: 2 },
							 { suit: 'Club', name: 'Jack', rank: 1, point: 3 },
							 { suit: 'Club', name: 'Queen', rank: 6, point: 0 }];
		var totalPoints=team.calculatePointsAfterEachTrick(wonCardsBucket);
		expect(totalPoints).to.equal(8); 
	});
	it('should determine team has won or not',function(){
		expect(team.isBidderWon(21,19)).to.be.true;
		expect(team.isBidderWon(18,20)).to.be.false;
	});
	it('should have pair of trump',function(){
		var player1Hand=[ { suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
					      { suit: 'Spade', name: 'King', rank: 5, point: 0 },
  					      { suit: 'Spade', name: 'Queen', rank: 6, point: 0 },
  					      { suit: 'Diamond', name: 'Jack', rank: 1, point: 3 },
  					      { suit: 'Diamond', name: 9, rank: 2, point: 2 },
  					      { suit: 'Spade', name: 'Ace', rank: 3, point: 1 },
  					      { suit: 'Spade', name: 10, rank: 4, point: 1 },
  					      { suit: 'Spade', name: 7, rank: 8, point: 0 }];
  		var player2Hand=[{ suit: 'Heart', name: 9, rank: 2, point: 2 },
  							{ suit: 'Heart', name: 'Ace', rank: 3, point: 1 },
  							{ suit: 'Heart', name: 10, rank: 4, point: 1 },
 							{ suit: 'Heart', name: 'King', rank: 5, point: 0 },
 							{ suit: 'Club', name: 9, rank: 2, point: 2 },
  							{ suit: 'Club', name: 'Ace', rank: 3, point: 1 },
  							{ suit: 'Club', name: 10, rank: 4, point: 1 },
  							{ suit: 'Heart', name: 'Queen', rank: 6, point: 0 }]			
		expect(team.checkPair(player1Hand,player2Hand,'Spade')).to.be.true;
	});
	it('should have pair of trump',function(){
		var player1Hand=[ { suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
		                  { suit: 'Heart', name: 'Ace', rank: 3, point: 1 },
						  { suit: 'Spade', name: 'King', rank: 5, point: 0 },
  					      { suit: 'Diamond', name: 'Jack', rank: 1, point: 3 },
  					      { suit: 'Diamond', name: 9, rank: 2, point: 2 },
  					      { suit: 'Spade', name: 'Ace', rank: 3, point: 1 },
  					      { suit: 'Spade', name: 10, rank: 4, point: 1 },
  					      { suit: 'Spade', name: 7, rank: 8, point: 0 }];
  		var player2Hand=[{ suit: 'Heart', name: 9, rank: 2, point: 2 },
  						  { suit: 'Spade', name: 'Queen', rank: 6, point: 0 },
  						  { suit: 'Heart', name: 10, rank: 4, point: 1 },
 					      { suit: 'Heart', name: 'King', rank: 5, point: 0 },
 						  { suit: 'Club', name: 9, rank: 2, point: 2 },
  						  { suit: 'Club', name: 'Ace', rank: 3, point: 1 },
  						  { suit: 'Club', name: 10, rank: 4, point: 1 },
  						  { suit: 'Heart', name: 'Queen', rank: 6, point: 0 }]			
		expect(team.checkPair(player1Hand,player2Hand,'Spade')).to.be.false;
	});
});
