

define(['jquery', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], function($) {
	return function () {

		$('.adviceDroppable, #lightsSlider').droppable({
			accept: ".advice",
			tolerance: 'intersect',
			drop: function( event, ui ) {
				console.log(this, event, ui);
				$(ui).addClass('active');
				var energyReduction = parseInt($(ui).attr('data-energy-reduction'));
				var costReduction = parseInt($(ui).attr('data-cost-reduction'));
				var energy = parseInt($('.energyTotal').text()) - energyReduction;
				var costs = parseInt($('.costsTotal').text()) - costReduction;
				$('.energyTotal').text(energy);
				$('.costsTotal').text(costs);
			}
		});


		$('.advice').draggable({
			revert: true
		});

	};
});
