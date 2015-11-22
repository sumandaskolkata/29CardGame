var lib = require('./cardGenerator.js').lib;

var cards = [ { suit: 'Heart', name: 'Jack', rank: 1, point: 3 },
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
		assert.deepEqual({'name':'Jack','suit':'Heart','rank':1,'point':3},new lib.SetProperty('Heart','Jack',1,3))
	});
});

describe('generate all cards',function(){
	it('should have 32 cards',function(){
		assert.equal(32,lib.generateCard().length);
	});
	it('should have all card',function(){
		assert.deepEqual(cards,lib.generateCard());
	});
});

