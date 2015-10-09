Template.addBoardModal.helpers({

    backgrounds: function() {   
    	var backgrounds = [];

     	for(var i = 1; i <= 15; i++) {
     		var index = ((i < 10) ? ("0" + i) : i);
        	backgrounds.push({index: i, path:"/assets/images/backgrounds/thumbs/" + index + ".jpg"});
    	}

    	console.log(backgrounds);
        
        return backgrounds;
    }
    
});

Template.addBoardModal.rendered = function () {
	$(".background-images").imagepicker();
};