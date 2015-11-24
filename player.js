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
	this.isTrumpSetter = false;
	
};
lib.Player.prototype= {
	bidPoints : function (assumingBidPoint) {
		return {ID:this.playerID,bidPoint:assumingBidPoint};
	},
	checkPair : function(hand,trumpSuit){
		var handSortByPair=hand.filter(function(card){ return (card.name=='King')||(card.name=='Queen')});
		var handSortByPairWithTrumpLength=handSortByPair.filter(function(card){return card.suit==trumpSuit}).length;
     	return (handSortByPairWithTrumpLength==2) ? true : false;
     }
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
	isBidderWon : function(pointsCollectedByTeam,valueOfBid){
		return (pointsCollectedByTeam >= valueOfBid) ? true :false
	},
	checkPair : function(player1Hand,player2Hand,trumpSuit){
		var player1hasPair=lib.Player.prototype.checkPair(player1Hand,trumpSuit);
		var player2hasPair=lib.Player.prototype.checkPair(player2Hand,trumpSuit);
		return ((player1hasPair) || (player2hasPair)) ? true : false;
	},
};
var twoTeam = lib.makeTwoTeams(['shruti','surajit','jishnu','ranju'])
lib.monitor = {};
lib.monitor.team1 = new lib.Team(twoTeam[0]);
lib.monitor.team2 = new lib.Team(twoTeam[1]);



exports.lib=lib;	
