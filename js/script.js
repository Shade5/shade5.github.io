$( function() {

	$('.tiles').on('mouseover', function() {
		$( this ).find("img").stop().animate({
			opacity:0.7,
			},
			400);
		$( this ).find(".middle").stop().fadeIn(400);
	});

	$('.tiles').on('mouseout', function() {
		$( this ).find("img").stop().animate({
			opacity:1
			},
			400);
		$( this ).find(".middle").stop().fadeOut(400);
	});

	$('.options').on('click', function() {
		var $chil = $( this )
		var $sib = $( this ).siblings();
		$sib.each(function() {
			$(this).removeClass('active')
			$(this).addClass('inactive')
			$($(this).attr('data-optionsid')).slideUp(500, function(){
				$($chil.attr('data-optionsid')).slideDown(500);
				$chil.addClass('active')
				$chil.removeClass('inactive')
			});
		});
	});
});