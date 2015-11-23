var deckLib = require('../deck.js').module;
var cardGeneratorLib = require('../cardGenerator.js').lib;
var expect = require('chai').expect;

var deckOfCards = new cardGeneratorLib.generateDeckOf32Cards();

describe('Deck',function(){
	var deck = new deckLib.Deck(deckOfCards);
	var splitedCards = deck.splitCardsIntoGroupOfFour();

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

	describe('#divide into group of 4',function(){
		it('should return an array of length 8',function(){
			expect(8).to.equal(splitedCards.length);
		});

		it('each element should have 4 cards',function(){
			expect(4).to.equal(splitedCards[0].length)
		});
	});

	describe('#distribute',function(){
		it('should give set of 4 cards to 1 player',function(){
			expect(4).to.equal(deck.distributeCards(splitedCards).length);
		});

		it('should give length of 7 after 1st call',function(){
			expect(7).to.equal(splitedCards.length);
		});

		it('should give set of 4 cards to 1 player for 2nd time',function(){
			expect(4).to.equal(deck.distributeCards(splitedCards).length);
		});
		
		it('should give length of 6 after 2nd call',function(){
			expect(6).to.equal(splitedCards.length);
		});
	});
});




