

define(['jquery', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], function($) {
	return function () {

		$('.adviceDroppable, #lightsSlider').droppable({
			accept: ".advice",
			drop: function( event, ui ) {
				console.log(this, event, ui);
			}
		});


		$('.advice').draggable({
			revert: true
		});

	};
});
