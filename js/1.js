$( function() {

	var sticky = new Waypoint.Sticky({
	  element: $('#topbar')[0]
	})

	$('.invisiblepage').waypoint(function(direction) {
		$(this.element).animate({
				opacity:1,
				},
				1000);
		$(this.element).removeClass('invisiblepage');
	},{
	  offset:'80%'
	});

	$('.projecttiles').waypoint(function(direction) {

		if(direction=="down"){
	    	$('html, body').stop().animate({
	        scrollTop: $(this.element).next().offset().top-150},
	        'slow');
		}

	},{
	  offset: function() {
		  return -this.element.offsetHeight*0.33;
		}
	});


	$('.projecttiles').waypoint(function(direction) {

		if(direction=="up"){
	    	$('html, body').stop().animate({
	        scrollTop: $(this.element).offset().top-150},
	        'slow');
		}

	},{
	  offset: function() {
		  return -(this.element.offsetHeight)*0.5;
		}
	});
});