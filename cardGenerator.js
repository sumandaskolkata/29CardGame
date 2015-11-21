var lib = {};


lib.SetProperty = function(name,suit,rank,point){
	this.name = name;
	this.suit = suit;
	this.rank = rank;
	this.point = point;
};

lib.generateCard = function(){
	var cards = ['Jack',9,'Ace',10,'King','Queen',8,7];
	var suit = ['Heart','Spade','Club','Diamond'];
	var points = [3,2,1,1,0,0,0,0];
	var allCards = [];
	suit.forEach(function(eachSuit){
		cards.forEach(function(eachCard,index){
			allCards.push(new lib.SetProperty(eachCard,eachSuit,index + 1,points[index]));
		});
	});
	return allCards;
};

exports.lib = lib;
