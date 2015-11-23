var ld = require('lodash');
var module = {};

module.Deck = function(playableCards){
	this.playableCards = playableCards;
};
module.Deck.prototype = {
	shuffleCards : function(){ 
		return ld.shuffle(this.playableCards);
	},
	divideIntoFour : function(){
		return ld.chunk(this.playableCards,4);
	},
};
exports.module = module;
