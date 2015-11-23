	var ld = require('lodash');
var module = {};

module.Deck = function(playableCards){
	this.playableCards = playableCards;
};
module.Deck.prototype = {
	shuffleCards : function(){ 
		return ld.shuffle(this.playableCards);
	},
	splitCardsIntoGroupOfFour : function(){
		return ld.chunk(this.playableCards,4);
	},
	distributeCards : function(remainingCards){
		var cardForEachPlayer = remainingCards.shift();
		return cardForEachPlayer;
	},
};
exports.module = module;
