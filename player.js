var ld = require('lodash');

var makeTwoTeams = function(playersUniqueIDs){
	var randomisePlayersUniqueIDs = ld.shuffle(playersUniqueIDs);
	var seperatedTeams = ld.chunk(randomisePlayersUniqueIDs,2);
	return seperatedTeams;
};
var Player = function (playerUniqueID) {
	this.playerID=playerUniqueID
	this.hand = [];
	this.bidPoints = function (assumingBidPoint) {
		return {ID:playerUniqueID,bidPoint:assumingBidPoint};
	};
};
