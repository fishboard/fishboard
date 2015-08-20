Template.myPanel.rendered = function() {
  var $container = $('#my-panel');
  // init
  $container.packery({
    itemSelector: '.item',
    gutter: 10
  });

}
