/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  addBoard: function (text) { 
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Boards.insert({
      text: text,
      createdAt: new Date(),
      createdBy: Meteor.userId()
    });
  },

  updateCurrentBoardId: function(boardId) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    console.log(boardId);
    // Todo UserSettings
  },

  'server/method_name': function () {
    // server method logic
  }
});
