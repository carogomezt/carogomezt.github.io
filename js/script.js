$(function() {

    $(window).scroll(function() {
		
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var $navbar = $('nav');
		var $navbarWrapper = $('.navbar-wrapper')

		var pinPoint = $navbarWrapper.offset().top;

		if (distanceScrolled >= pinPoint) {
			$navbar.addClass('pinned');
		} else {
			$navbar.removeClass('pinned')
		}
	});
    
	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));
		var scrollTop = $target.offset().top;
		$('html, body').animate({'scrollTop': scrollTop}, 500);
	});

});