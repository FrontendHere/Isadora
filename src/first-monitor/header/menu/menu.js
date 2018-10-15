;(function () {
	$('.open-menu-i').click(function() {
		$('.menu-i').css({'left' :0});
		$('.overlay').css('display', 'block');
	});
	$('.close-menu-i').click(function() {
		$(this).closest('.menu-i').css({'left' :'-100%'});
		$('.overlay').css('display', 'none');
	});
	$('.overlay').click(function() {
		$(this).closest('.menu-i').css({'left' :'-100%'});
	});		
}());