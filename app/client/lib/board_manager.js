



BoardManager = (function(){ 
	self: this;
    // private methods 
    var getCurrentBoard = function() {
		return Session.get("board::Current");
	}

	var setCurrentBoard = function(boardId) {
    	Session.set("board::Current", boardId);
    }

 
 	// public methods 
    return {

    	hasBoard: function() {
    		console.log((getCurrentBoard() != undefined));
    		return (getCurrentBoard() != undefined);
    	},
    	currentBoard: function(boardId) { 
    		if (boardId != undefined) {
				setCurrentBoard(boardId);
				Meteor.call("updateCurrentBoardId", boardId);
    		}

    		return getCurrentBoard();
    	}
    };
}());