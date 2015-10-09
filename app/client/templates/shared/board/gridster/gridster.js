/*****************************************************************************/
/* GridsterBoard: Event Handlers */
/*****************************************************************************/
Template.GridsterBoard.events({
	"click .mybutton": function(e, t) {
		var gridster = $(".gridster ul").gridster().data('gridster');
	    var s = gridster.serialize();

        alert(JSON.stringify(s));
	},
	"click .widget-remove-button": function(e, t) {
		console.log($(e.target));
		console.log($(e.target).parent("li"));
		
		var gridster = $(".gridster ul").gridster().data('gridster');
        gridster.remove_widget( $(e.target).parent("li") );
	}
});

/*****************************************************************************/
/* GridsterBoard: Helpers */
/*****************************************************************************/
Template.GridsterBoard.helpers({
	randomID: function() {
		return Random.id();
	}
});

/*****************************************************************************/
/* GridsterBoard: Lifecycle Hooks */
/*****************************************************************************/
Template.GridsterBoard.onCreated(function () {
});

Template.GridsterBoard.onRendered(function () {
	$(function(){ //DOM Ready
		$(".gridster").removeClass("hide");
	    $(".gridster ul").gridster({
	        widget_margins: [10, 10],
	        widget_base_dimensions: [10, 10],
   			helper: 'clone',
   			autogrow_cols: true,
   			auto_init: true,

	        autogenerate_stylesheet: true,
	        resize: {
	          enabled: true
	        }   ,
	        serialize_params: function($w, wgd) { 
			    return { 
			           id: Random.id(), 
			           col: wgd.col, 
			           row: wgd.row, 
			           size_x: wgd.size_x, 
			           size_y: wgd.size_y, 
			           //chart: $($w).attr("data-chart"), 
			           //htmlContent : $($w).html() 
			         };
			}     
	    });

	    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


	    var g = new JustGage({
		    id: "gauge",
		    value: getRandomInt(350, 980),
		    min: 350,
		    max: 980,
		    title: "Lone Ranger",
		    label: "miles traveled"
	  	});


		renderTimeout = Meteor.setInterval(function() {

    		g.refresh(getRandomInt(350, 980));
    		
  		}, 2000);



});


  
});

Template.GridsterBoard.onDestroyed(function () {
});

