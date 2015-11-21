var lib = require('./cardGenerator.js').lib;
var expect = require('chai').expect;

var cards = [ { suit: 'Jack', name: 'Heart', rank: 1, point: 3 },
  { suit: 9, name: 'Heart', rank: 2, point: 2 },
  { suit: 'Ace', name: 'Heart', rank: 3, point: 1 },
  { suit: 10, name: 'Heart', rank: 4, point: 1 },
  { suit: 'King', name: 'Heart', rank: 5, point: 0 },
  { suit: 'Queen', name: 'Heart', rank: 6, point: 0 },
  { suit: 8, name: 'Heart', rank: 7, point: 0 },
  { suit: 7, name: 'Heart', rank: 8, point: 0 },
  { suit: 'Jack', name: 'Spade', rank: 1, point: 3 },
  { suit: 9, name: 'Spade', rank: 2, point: 2 },
  { suit: 'Ace', name: 'Spade', rank: 3, point: 1 },
  { suit: 10, name: 'Spade', rank: 4, point: 1 },
  { suit: 'King', name: 'Spade', rank: 5, point: 0 },
  { suit: 'Queen', name: 'Spade', rank: 6, point: 0 },
  { suit: 8, name: 'Spade', rank: 7, point: 0 },
  { suit: 7, name: 'Spade', rank: 8, point: 0 },
  { suit: 'Jack', name: 'Club', rank: 1, point: 3 },
  { suit: 9, name: 'Club', rank: 2, point: 2 },
  { suit: 'Ace', name: 'Club', rank: 3, point: 1 },
  { suit: 10, name: 'Club', rank: 4, point: 1 },
  { suit: 'King', name: 'Club', rank: 5, point: 0 },
  { suit: 'Queen', name: 'Club', rank: 6, point: 0 },
  { suit: 8, name: 'Club', rank: 7, point: 0 },
  { suit: 7, name: 'Club', rank: 8, point: 0 },
  { suit: 'Jack', name: 'Diamond', rank: 1, point: 3 },
  { suit: 9, name: 'Diamond', rank: 2, point: 2 },
  { suit: 'Ace', name: 'Diamond', rank: 3, point: 1 },
  { suit: 10, name: 'Diamond', rank: 4, point: 1 },
  { suit: 'King', name: 'Diamond', rank: 5, point: 0 },
  { suit: 'Queen', name: 'Diamond', rank: 6, point: 0 },
  { suit: 8, name: 'Diamond', rank: 7, point: 0 },
  { suit: 7, name: 'Diamond', rank: 8, point: 0 } ];



describe('add all attributes',function(){
	it('should set all properties',function(){
		expect({'name':'Jack','suit':'Heart','rank':1,'point':3}).to.deep.equal(new lib.Card('Heart','Jack',1,3));
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

