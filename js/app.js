console.log('this is the js file!');

$('#scroll').on('click', function(event) {

    var target = $(this.getAttribute('href'));
		console.log(target);

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
