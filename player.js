var ld = require('lodash');

var makeTwoTeams = function(playersUniqueIDs){
	var randomisePlayersUniqueIDs = ld.shuffle(playersUniqueIDs);
	var seperatedTeams = ld.chunk(randomisePlayersUniqueIDs,2);
	return seperatedTeams;
};
lib.Player = function (playerUniqueID) {
	this.cards = [];
	this.bidPoints = function (assumingBidPoint) {
		return {ID:playerUniqueID,bidPoint:assumingBidPoint};
	};
};
