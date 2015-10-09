Template.boardmenu.helpers({

    boards: function() {        
        return Boards.find();
    },

    currentBoard: function() {
      return BoardManager.hasBoard();
    }
    
});

Template.boardmenu.events({
    "click .btn-add-board": function(e,t) {
      Modal.show("addBoardModal");
      /*
    
    if (Boards.find().count() > 0) {
        console.log("currentBoard true");
        Meteor.call("addBoard", "Main Board "+ Boards.find().count() );
    }
    else {
        Meteor.call("addBoard", "Main Board");
    }


    $('#boards').val(BoardManager.currentBoard());
    $('#boards').selectpicker("refresh"); 

    */

  },

  "change #boards": function(e,t) {
    boardId = t.$('#boards').val();
    console.log(boardId);

    if (boardId == -1) {
      Modal.show("addBoardModal");
      //alert("TODO: Add new board");

    	$('#boards').val(BoardManager.currentBoard());
    	$('#boards').selectpicker("refresh");	
    }
    else {
      BoardManager.currentBoard(boardId);
    }    
  },
  "click #boards": function(e,t) {
  	console.log(t.$('#boards').val());
  }
});

Template.boardmenu.rendered = function(){
  $('#boards').selectpicker();
  board = $('#boards').val();
  Session.set("board::Current", board);  
};

var renderTimeout = false;
Template.boardmenuitem.rendered = function(){
  if (renderTimeout !== false) {
    Meteor.clearTimeout(renderTimeout);
  }
  renderTimeout = Meteor.setTimeout(function() {
    $('#boards').selectpicker("refresh");
    renderTimeout = false;
  }, 10);
};