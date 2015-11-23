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
lib.Team = function(team){
	this.player1 = new lib.Player(team[0]);
	this.player2 = new lib.Player(team[1]);


}
lib.Team.prototype = {

};
exports.lib=lib;
