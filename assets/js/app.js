$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop(),
		serversH = $("#photos").innerHeight();


	/* Header fixed */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll() {
		
		if (scrollOffset >= introH) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}

	}

	/* Smooth Scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this), 
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass('active');
		$this.addClass('active');

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

	});


	/* Nav Toggle */
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$("#nav").toggleClass('active');
	});

	
});