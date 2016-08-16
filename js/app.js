var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('nav').outerHeight();

// on scroll, the interval function will know that the user has started scrolling
$(window).scroll(function(event){
	didScroll = true;
});

// now run the hasScrolled() and then reset the didScroll status back to false.
setInterval(function(){
	if (didScroll){
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled(){
	var scroll_position = $(this).scrollTop();
	if(Math.abs(lastScrollTop - scroll_position) <= delta)
		return;

	// if the current position > last position AND scrolled past navbar...
	if(scroll_position > lastScrollTop && scroll_position > navbarHeight){

		// scroll down
		$('nav').removeClass('nav-down').addClass('nav-up');

	} else {

		// scroll up
		// If did not scroll past the document (possible on mac)...
		if(scroll_position + $(window).height() < $(document).height()) {
			$('nav').removeClass('nav-up').addClass('nav-down');
			console.log(scroll);
		}
	}

	lastScrollTop = scroll_position;
}
