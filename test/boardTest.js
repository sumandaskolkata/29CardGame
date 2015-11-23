var lib	= require('../board.js').board;
var assert = require ('chai').assert;
describe('board ',function(){
	it('should has two team',function(){
		var expected = ['team1','team2'];
		assert.deepEqual(expected,Object.keys(lib))
	});
});
describe('selectbidder',function(){
	it('should return one player at a time',function(){
		assert.equal('shruti',lib.selectBidder(['shruti','surajit','jishnu','ranju']))
	})
})