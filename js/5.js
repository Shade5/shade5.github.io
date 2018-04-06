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

	$('.projecttiles, .projecttilescontainer').waypoint(function(direction) {

		if(direction=="down"){
	    	$('html, body').stop().animate({
	        scrollTop: $(this.element).next().offset().top-150},
	        'slow');
		}

	},{
	  offset: function() {
		  return -this.element.offsetHeight*0.6;
		}
	});


	$('.projecttiles, .projecttilescontainer').waypoint(function(direction) {

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

	$('.imgplaceholder').on('click', function() {
		$iframe = $("#interactive");
		$(this).slideUp('fast', function() {
			$iframe.attr('src', 'https://www.youtube.com/embed/tT9e_QrrJzM?autoplay=1');
			$iframe.slideDown('fast');
		});
	});
});