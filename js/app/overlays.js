

define(['jquery', 'https://www.gstatic.com/charts/loader.js'], function($) {

	if ($('#start-sync').length > 0) {

		$('#start-sync').on('click', function() {
			$('.overlay').show();
			var url = $('.overlay').attr('data-url');
			setTimeout(function() {
				window.location = url;
			});
		});

	}

});