var lib = {};
lib.Card = function(suit,name,rank,point){
	this.suit = suit;
	this.name = name;
	this.rank = rank;
	this.point = point;
};

lib.generateDeckOf32Cards = function(){
	var prioritisedCards = ['Jack',9,'Ace',10,'King','Queen',8,7];
	var suits = ['Heart','Spade','Club','Diamond'];
	var prioritisedPoints = [3,2,1,1,0,0,0,0];
	var deckOfCards = [];
	suits.forEach(function(eachSuit){
		prioritisedCards.forEach(function(eachCard,indexOfprioritisedCards){
			deckOfCards.push(new lib.Card(eachSuit,eachCard,indexOfprioritisedCards + 1,prioritisedPoints[indexOfprioritisedCards]));
		});
	});
	return deckOfCards;
};

exports.lib = lib;
