/*****************************************************************************/
/* GridsterBoard: Event Handlers */
/*****************************************************************************/
Template.GridsterBoard.events({
});

/*****************************************************************************/
/* GridsterBoard: Helpers */
/*****************************************************************************/
Template.GridsterBoard.helpers({
});

/*****************************************************************************/
/* GridsterBoard: Lifecycle Hooks */
/*****************************************************************************/
Template.GridsterBoard.onCreated(function () {
});

Template.GridsterBoard.onRendered(function () {
	$(function(){ //DOM Ready

	    $(".gridster ul").gridster({
	        widget_margins: [5, 5],
	        widget_base_dimensions: [10, 10],
   helper: 'clone',
	        
	        resize: {
	          enabled: true
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

