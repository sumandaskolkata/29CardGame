	var ld = require('lodash');
var module = {};

module.Deck = function(playableCards){
	this.playableCards = playableCards;
};
module.Deck.prototype = {
	shuffleCards : function(){ 
		return ld.shuffle(this.playableCards);
	},
};
exports.module = module;
