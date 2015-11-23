var deckLib = require('../deck.js').module;
var cardGeneratorLib = require('../cardGenerator.js').lib;
var expect = require('chai').expect;

var deckOfCards = new cardGeneratorLib.generateDeckOf32Cards();

describe('Deck',function(){
	var deck = new deckLib.Deck(deckOfCards)
	it('should have playable cards',function(){
		expect(deck).to.have.all.keys('playableCards');
	});
	it('deck should return an object',function(){
		expect(deck).to.be.a('object');
	});
	it('"playableCard" should have 32 playable cards',function(){
		expect(deck.playableCards).to.deep.equal(deckOfCards);
	});
	describe('#shuffel',function(){
		it('should have length of 32',function(){
			expect(32).to.equal(deck.shuffleCards().length);
		});
	});
	describe('#divide into 4',function(){
		it('should return an array of length 8',function(){
			expect(8).to.equal(deck.splitCardsIntoGroupOfFour().length);
		});
	});
});




