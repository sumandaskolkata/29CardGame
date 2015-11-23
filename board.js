var m = require('./player.js').lib;
var board = {};

exports.board = board;

var twoTeam = m.makeTwoTeams(['shruti','surajit','jishnu','ranju']);
board.team1 = new m.Team(twoTeam[0]);
board.team2 = new m.Team(twoTeam[1]);

board.selectBidder = function (){
	var count=0;
	return function(playersID){
		var selectedPlayer = playersID[count%4];
		count++;
		return selectedPlayer;
	};
}();

Object.defineProperties(board,{'selectBidder':{enumerable:false}})
