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

}
var twoTeam = lib.makeTwoTeams(['shruti','surajit','jishnu','ranju'])
lib.monitor = {};
lib.monitor.team1 = new lib.Team(twoTeam[0]);
lib.monitor.team2 = new lib.Team(twoTeam[1]);



exports.lib=lib;	
