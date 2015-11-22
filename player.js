var ld = require('lodash');

var makeTwoTeams = function(playersID){
	var randomisePlayers = ld.shuffle(playersID);
	var seperatedTeams = ld.chunk(randomisePlayers,2);
	return seperatedTeams;
};
var Player = function (playerUniqueID) {
	this.cards = [];
	this.bidPoints = function (point) {
		return {ID:playerUniqueID,point:point};
	};
};
