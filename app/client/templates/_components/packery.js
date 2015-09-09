
Template.packery.rendered = function() {

var $itemElems;
var $container;
var dragTimeout;
  $( function() {
    $container = $('.packery');
    $container.packery({
      rowHeight: 100,
      columnHeight: 100,
      gutter: 0
    });
    // get item elements, jQuery-ify them
    $itemElems = $( $container.packery('getItemElements') );
    // make item elements draggable
    $itemElems
    .draggable({
      grid: [ 100, 100 ],
      start: function(event,ui){
        if(!$(event.target).hasClass('item'))
        return false;
      },
      cancel: '.stampitem',
      stop: function(event,ui){
        if ( dragTimeout ) {
          clearTimeout( dragTimeout );
        }
        dragTimeout = setTimeout( function() {
            $container.packery();
        }, 500 );
      }
    })
    .resizable({
      grid: 100,
      handles: {
          'nw': '#nwgrip',
          'ne': '#negrip',
          'sw': '#swgrip',
          'se': '#segrip',
          'n': '#ngrip',
          'e': '#egrip',
          's': '#sgrip',
          'w': '#wgrip'
      },
      start: function(event,ui){
        if($(event.target).hasClass('item')){
          $(event.target).css('z-index', 1000);
        }
      },
      resize: function(event,ui){
              $container.packery( 'fit', event.target, ui.position.left, ui.position.top );
      },
      cancel: '.stampitem',
      stop: function(event,ui){
              $(event.target).css('z-index','auto');
              $container.packery();
      },
      maxWidth:800,
      refreshPositions: true
    });
    // bind Draggable events to Packery
    $container.packery( 'bindUIDraggableEvents', $itemElems );

  $itemElems.on("dblclick",function(event){
    event.stopPropagation();
    var $target = $(event.target);
    if($target.hasClass('item')){
      $($target).addClass('stampitem').removeClass('item ui-draggable ui-resizable');
      $container.packery('stamp', event.target);
    }
    else{
      $($target).addClass('item ui-draggable ui-resizable').removeClass('stampitem');
      $container.packery('unstamp', event.target);
    }
  })

  $itemElems.not('.item').on('dragstart', function(event){return false;})

  $('.ui-resizable-handle').on('dblclick', function(event){return false;})
  });

  }
