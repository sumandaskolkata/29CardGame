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
	this.bidPoints = function (assumingBidPoint) {
		return {ID:playerUniqueID,bidPoint:assumingBidPoint};
	};
};

exports.lib=lib;	
