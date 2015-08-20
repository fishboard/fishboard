Template._navbar.events = {
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
