
Template.boardPage.helpers({
  students: [
    {name: "Albert Einstein"},
    {name: "Tim Berners-Lee"},
    {name: "Bill S. Preston, Esquire"}
  ]
});

Template.boardPage.rendered = function() {
  $('#students').selectpicker();
}
