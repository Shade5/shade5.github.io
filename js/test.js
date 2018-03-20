$( function() {

	var sticky = new Waypoint.Sticky({
	  element: $('#topbar')[0]
	})

	var waypoint = new Waypoint({
	  element: $('.tiles'),
	  handler: function() {
	    alert('Basic waypoint triggered');
	  }
	})

});