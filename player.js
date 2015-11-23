var lib={};
var ld = require('lodash');


lib.makeTwoTeams = function(playersUniqueIDs){
	var randomisePlayersUniqueIDs = ld.shuffle(playersUniqueIDs);
	var seperatedTeams = ld.chunk(randomisePlayersUniqueIDs,2);
	return seperatedTeams;
};

lib.Player = function (playerUniqueID) {
	this.playerID=playerUniqueID
	this.hand = [];
	this.isBidder = false;
	this.hasPair = false;
	
};
lib.Player.prototype= {
	bidPoints : function (assumingBidPoint) {
		return {ID:this.playerID,bidPoint:assumingBidPoint};
	},
};
lib.Team = function(team){		
	this.player1 = new lib.Player(team[0]);
	this.player2 = new lib.Player(team[1]);
	this.isPair = false;
	this.wonCardsBucket = [];
	this.score = 0;
};
lib.Team.prototype = {
	scoreBoard : function(isWinner){
		(isWinner == true) ? this.score ++ : this.score --;
	},
	calculatePointsAfterEachTrick : function(wonCards){
		return ld.sum(wonCards.map(function(element){ return element.point}))
	},
	isBidderWon:function(pointsCollectedByTeam,valueOfBid){
		return (pointsCollectedByTeam >= valueOfBid) ? true :false
	}
}


exports.lib=lib;

