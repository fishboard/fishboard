Meteor.publish('user_settings', function () {
  return UserSettings.find();
});

Meteor.publish('boards', function () {
  return Boards.find();
});