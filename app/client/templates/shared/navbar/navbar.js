Template.navbar.helpers({
    currentBoard: function() {
      return BoardManager.hasBoard();
    }
});

Template.navbar.events = {
  "click .btn-add-widget": function(e,t) {
    var gridster = $(".gridster ul").gridster().data('gridster');

    // Get the HTML content of the template passing data
    var html = UI.toHTML(Template.gridsterWidget, { });

    gridster.add_widget.apply(gridster, [html, 1, 1]);
    //alert("TODO: Add New Widget");
  },

  "click .add-board-modal" : function(e,t) {
         e.preventDefault();
         //Session.set("selectedImageId", t.data._id);
         console.log("Image ID: "+ Session.get("selectedImageId"));
         //var stuff=$('#projectImageModal');
         //console.log(stuff);
         //stuff.modal('show');
 //      $('#projectImageModal').modal().modal("show");
         Modal.show("addBoardModal");
         //$('#projectImageModal').modal('show');
         //$('.projectImageModal').modal('show');
     }
 };



Template.navbar.rendered = function() {
    
    console.log("foo rendered 1");
};

Template.navbar.onRendered = function() {
       console.log("foo rendered 2");
};

Template.navbar.created = function() {
    Meteor.subscribe('boards', function() {
      console.log(Boards.find().count());
    });

    console.log("foo created");
};

Template.navbar.destroyed = function() {
    console.log("foo destroyed");
};
