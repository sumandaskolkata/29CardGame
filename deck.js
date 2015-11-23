var ld = require('lodash');
var module = {};

module.Deck = function(playableCards){
	this.playableCards = playableCards;
};
module.Deck.prototype = {
	shuffleCards : function(){ 
		return ld.shuffle(this.playableCards);
	},
	splitCardsIntoGroupOfFour : function(shuffledCards){
		return ld.chunk(shuffledCards,4);
	},
	distributeCards : function(remainingCards){
		var cardForEachPlayer = remainingCards.shift();
		return cardForEachPlayer;
	},
};
exports.module = module;
