Boards = new Mongo.Collection('boards');


Boards.attachSchema(new SimpleSchema({
  _id: {
    type: String,
  },	
  title: {
    type: String,
  },
  permission: {
    type: String,
    allowedValues: ['public', 'private'],
  },  
  "settings.background": {
    type: String,
  },
  "settings.rotate": {
    type: String,
  },
  "settings.theme": {
    type: String,
    allowedValues: [ 'dark', 'light' ]
  },	
  "widgets.$._id": {
    type: Boolean,
  },
  "widgets.$.col": {
    type: Boolean,
  },
  "widgets.$.row": {
    type: Boolean,
  },
  "widgets.$.size_x": {
    type: Boolean,
  },
  "widgets.$.size_y": {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  },
  // XXX Inconsistent field naming
  modifiedAt: {
    type: Date,
    denyInsert: true,
    optional: true,
  }
}));
/*
Boards.helpers({
});
*/

// ALLOWS
Boards.allow({
    insert: function() { return true; },
    update: function() { return true; },
    remove: function() { return true; }
});