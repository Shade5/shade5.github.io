$( function() {

	var waypoint = new Waypoint({
	  element: $('#one'),
	  handler: function() {
	    $('#two').show(1000);
	  }
	},{offset: "-200px" });

});