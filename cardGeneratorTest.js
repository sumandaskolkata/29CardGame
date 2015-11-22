var lib = require('./cardGenerator.js').lib;
var m = require('./deck.js').module;
var expect = require('chai').expect;

var cards =[ { suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
  { suit: 'Heart', name: 9, rank: 2, point: 2 },
  { suit: 'Heart', name: 'Ace', rank: 3, point: 1 },
  { suit: 'Heart', name: 10, rank: 4, point: 1 },
  { suit: 'Heart', name: 'King', rank: 5, point: 0 },
  { suit: 'Heart', name: 'Queen', rank: 6, point: 0 },
  { suit: 'Heart', name: 8, rank: 7, point: 0 },
  { suit: 'Heart', name: 7, rank: 8, point: 0 },
  { suit: 'Spade', name: 'Jack', rank: 1, point: 3 },
  { suit: 'Spade', name: 9, rank: 2, point: 2 },
  { suit: 'Spade', name: 'Ace', rank: 3, point: 1 },
  { suit: 'Spade', name: 10, rank: 4, point: 1 },
  { suit: 'Spade', name: 'King', rank: 5, point: 0 },
  { suit: 'Spade', name: 'Queen', rank: 6, point: 0 },
  { suit: 'Spade', name: 8, rank: 7, point: 0 },
  { suit: 'Spade', name: 7, rank: 8, point: 0 },
  { suit: 'Club', name: 'Jack', rank: 1, point: 3 },
  { suit: 'Club', name: 9, rank: 2, point: 2 },
  { suit: 'Club', name: 'Ace', rank: 3, point: 1 },
  { suit: 'Club', name: 10, rank: 4, point: 1 },
  { suit: 'Club', name: 'King', rank: 5, point: 0 },
  { suit: 'Club', name: 'Queen', rank: 6, point: 0 },
  { suit: 'Club', name: 8, rank: 7, point: 0 },
  { suit: 'Club', name: 7, rank: 8, point: 0 },
  { suit: 'Diamond', name: 'Jack', rank: 1, point: 3 },
  { suit: 'Diamond', name: 9, rank: 2, point: 2 },
  { suit: 'Diamond', name: 'Ace', rank: 3, point: 1 },
  { suit: 'Diamond', name: 10, rank: 4, point: 1 },
  { suit: 'Diamond', name: 'King', rank: 5, point: 0 },
  { suit: 'Diamond', name: 'Queen', rank: 6, point: 0 },
  { suit: 'Diamond', name: 8, rank: 7, point: 0 },
  { suit: 'Diamond', name: 7, rank: 8, point: 0 } ];


describe('add all attributes',function(){
	it('should set all properties',function(){
		expect({'name':'Jack','suit':'Heart','rank':1,'point':3}).to.deep.equal(new lib.Card('Heart','Jack',1,3));
	});
  it('should set all properties of 7 of Diamond',function(){
    expect({'suit':'Diamond','name':'7','rank':8,'point':0}).to.deep.equal(new lib.Card('Diamond','7',8,0));
  });
});

describe('generate all cards',function(){
	it('should have 32 cards',function(){
		expect(32).to.equal(lib.generateDeckOf32Cards().length);
	});
	it('should have all card',function(){
		expect(cards).to.eql(lib.generateDeckOf32Cards());
	});
});

describe('shuffle the playable cards',function(){
  it('should have 32 cards',function(){
    var a = new m.Deck(lib.generateDeckOf32Cards());
    expect(32).to.equal(a.shuffle.length);
  });
});

