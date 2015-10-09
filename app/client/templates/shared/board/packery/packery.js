/*****************************************************************************/
/* PackeryBoard: Event Handlers */
/*****************************************************************************/
Template.PackeryBoard.events({
});

/*****************************************************************************/
/* PackeryBoard: Helpers */
/*****************************************************************************/
Template.PackeryBoard.helpers({
});

/*****************************************************************************/
/* PackeryBoard: Lifecycle Hooks */
/*****************************************************************************/
Template.PackeryBoard.onCreated(function () {
});

Template.PackeryBoard.onRendered(function () {

	var $itemElems;
	var $container;
	var dragTimeout;

	  $( function() {

	    $container = $('.packery');

		$container.packery({
			
		    itemSelector: '.item',
		    columnWidth: 180,
		    gutter: 10,
		    
		});

		// get item elements, jQuery-ify them
	    $itemElems = $( $container.packery('getItemElements') );

	    // make item elements draggable
	    $itemElems.draggable({
	      grid: [ 10, 10 ],
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
	    });


	    $itemElems.resizable({
	      grid: [ 10, 10 ],
	      handles: {
			  //'nw': '.nwgrip',
	          //'ne': '.negrip',
	          //'sw': '.swgrip',
	          'se': '.segrip'//,
	          //'n': '.ngrip',
	          //'e': '.egrip',
	          //'s': '.sgrip',
	          //'w': '.wgrip'
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
	      minWidth:180,
	      minHeight:180,
	      maxWidth:640,

	      refreshPositions: true
	    });

	    // bind Draggable events to Packery
	    $container.packery( 'bindUIDraggableEvents', $itemElems);	    
	  

/*
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

*/

	  $itemElems.not('.item').on('dragstart', function(event){return false;})

	  $('.ui-resizable-handle').on('dblclick', function(event){return false;})
  });

  
});

Template.PackeryBoard.onDestroyed(function () {
});

