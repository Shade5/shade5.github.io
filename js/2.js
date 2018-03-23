$( function() {

	var sticky = new Waypoint.Sticky({
	  element: $('#topbar')[0]
	})

	$('.invisiblepage').waypoint(function(direction) {
		console.log(this.element);
		$(this.element).animate({
				opacity:1,
				},
				1000);
		$(this.element).removeClass('invisiblepage');
	},{
	  offset:'80%'
	});

});