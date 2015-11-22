var Player = function (playerUniqueID) {
	this.cards = [];
	this.bidPoints = function (point) {
		return {ID:playerUniqueID,point:point};
	}
};
