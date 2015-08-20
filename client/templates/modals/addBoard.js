Template.addBoardModal.events = {
  "click button[data-create-board]" : function(e,t) {
    e.preventDefault()

    Modal.hide();
    Router.go("boardPage", {"id":"123"});

  }
}
