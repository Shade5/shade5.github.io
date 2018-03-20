$( function() {

	var sticky = new Waypoint.Sticky({
	  element: $('#topbar')[0]
	})

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
		$('#arrow').hide('400', function() {
			$('#arrowdiv').removeClass('witharrow');
		});
		var $current = $($(this).attr('data-optionsid'));
		$( this ).siblings().each(function() {
			$(this).find('a').removeClass('active')
			$(this).find('a').addClass('inactive')
		});

		$( this ).find('a').addClass('active')
		$( this ).find('a').removeClass('inactive')

		var $sib = $($(this).attr('data-optionsid')).siblings()

		$sib.each(function() {
			$(this).slideUp(500, function(){
				$current.slideDown(500);
			});
		});
	});

	$('.tiles').on('click', function() {
		$('#maintiles').slideUp(500);
		$('#arrowdiv').addClass('witharrow');
		$('#arrow').show('400');
		$details = $('#details');
		projectid = $(this).attr('data-projectid');
		$.get("data/"+projectid+".html", function(data) {
			$details.html(data);
		}).fail(function() {
			$details.html("Failed to fetch data");
		});
		$details.slideDown('400');
	});

});