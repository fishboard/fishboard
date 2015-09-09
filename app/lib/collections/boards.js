Boards = new Mongo.Collection('boards');

// ALLOWS
Boards.allow({
    insert: function() { return true; },
    update: function() { return true; },
    remove: function() { return true; }
});
