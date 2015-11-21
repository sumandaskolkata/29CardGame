var lib = require('./cardGenerator.js').lib;
var expect = require('chai').expect;

var cards = [ { name: 'Jack', suit: 'Heart', rank: 1, point: 3 },
  { name: 9, suit: 'Heart', rank: 2, point: 2 },
  { name: 'Ace', suit: 'Heart', rank: 3, point: 1 },
  { name: 10, suit: 'Heart', rank: 4, point: 1 },
  { name: 'King', suit: 'Heart', rank: 5, point: 0 },
  { name: 'Queen', suit: 'Heart', rank: 6, point: 0 },
  { name: 8, suit: 'Heart', rank: 7, point: 0 },
  { name: 7, suit: 'Heart', rank: 8, point: 0 },
  { name: 'Jack', suit: 'Spade', rank: 1, point: 3 },
  { name: 9, suit: 'Spade', rank: 2, point: 2 },
  { name: 'Ace', suit: 'Spade', rank: 3, point: 1 },
  { name: 10, suit: 'Spade', rank: 4, point: 1 },
  { name: 'King', suit: 'Spade', rank: 5, point: 0 },
  { name: 'Queen', suit: 'Spade', rank: 6, point: 0 },
  { name: 8, suit: 'Spade', rank: 7, point: 0 },
  { name: 7, suit: 'Spade', rank: 8, point: 0 },
  { name: 'Jack', suit: 'Club', rank: 1, point: 3 },
  { name: 9, suit: 'Club', rank: 2, point: 2 },
  { name: 'Ace', suit: 'Club', rank: 3, point: 1 },
  { name: 10, suit: 'Club', rank: 4, point: 1 },
  { name: 'King', suit: 'Club', rank: 5, point: 0 },
  { name: 'Queen', suit: 'Club', rank: 6, point: 0 },
  { name: 8, suit: 'Club', rank: 7, point: 0 },
  { name: 7, suit: 'Club', rank: 8, point: 0 },
  { name: 'Jack', suit: 'Diamond', rank: 1, point: 3 },
  { name: 9, suit: 'Diamond', rank: 2, point: 2 },
  { name: 'Ace', suit: 'Diamond', rank: 3, point: 1 },
  { name: 10, suit: 'Diamond', rank: 4, point: 1 },
  { name: 'King', suit: 'Diamond', rank: 5, point: 0 },
  { name: 'Queen', suit: 'Diamond', rank: 6, point: 0 },
  { name: 8, suit: 'Diamond', rank: 7, point: 0 },
  { name: 7, suit: 'Diamond', rank: 8, point: 0 } ];



describe('add all attributes',function(){
	it('should set all properties',function(){
		expect({'name':'Jack','suit':'Heart','rank':1,'point':3}).to.deep.equal(new lib.SetProperty('Jack','Heart',1,3));
	});
});

describe('generate all cards',function(){
	it('should have 32 cards',function(){
		expect(32).to.equal(lib.generateCard().length);
	});
	it('should have all card',function(){
		expect(cards).to.eql(lib.generateCard());
	});
});

