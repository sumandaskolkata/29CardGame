var ld = require('lodash');
var module = {};
exports.module = module;


var makeTwoTeams = function(playersID){
	var randomisePlayers = ld.shuffle(playersID);
	var seperatedTeams = ld.chunk(randomisePlayers,2);
	return seperatedTeams;
};
module.Player = function (playerUniqueID) {
	this.playerId = playerUniqueID;
	this.cards = [];
	this.bidPoints = function (point) {
		return {ID:playerUniqueID,point:point};
	};
};
module.Player.prototype = {

};

module.Team = function(team){
	this.player1 = new module.Player(team[0]);
	this.player2 = new module.Player(team[1]);


}
module.Team.prototype = {

}
var twoTeam = makeTwoTeams(['shruti','surajit','jishnu','ranju'])
module.monitor = {};
module.monitor.team1 = new module.Team(twoTeam[0]);
module.monitor.team2 = new module.Team(twoTeam[1]);


