var ld = require('lodash');
var playersOfTheGame = [1,2,3,4];

var seperateTeam = function(players){
	var randomisePlayers = ld.shuffle(players);
	var seperatedTeams = ld.chunk(randomisePlayers,2);
	return seperatedTeams;
};

console.log(seperateTeam(playersOfTheGame));