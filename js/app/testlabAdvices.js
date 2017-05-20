

define(['jquery', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], function($) {
	return function () {

		$('.adviceDroppable, #lightsSlider').droppable({
			accept: ".advice"
		});


		$('.advice').draggable({
			revert: 'invalid'
		});

	};
});
