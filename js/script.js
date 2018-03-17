$( function() {

	$('.tiles').on('mouseover', function() {
		$( this ).find("img").animate({
			height: "350px",
			width: "auto",
			opacity:0.7,
			},
			400);
		$( this ).find(".text").fadeIn(400);
	});

	$('.tiles').on('mouseout', function() {
		$( this ).find("img").animate({
			height: "300px",
			width: "auto",
			opacity:1
			},
			400)
		$( this ).find(".text").fadeOut(400);
	});


});