

define(['jquery', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], function($) {
	return function () {

		$('.adviceDroppable, #lightsSlider').droppable({
			accept: ".advice",
			tolerance: 'pointer',
			drop: function( event, ui ) {
				var advice = ui.draggable;
				$(advice).addClass('active');
				var energyReduction = parseInt($(advice).attr('data-energy-reduction'));
				var costReduction = parseInt($(advice).attr('data-cost-reduction'));
				var energy = parseInt($('.energyTotal').text()) - energyReduction;
				var costs = parseInt($('.costsTotal').text()) - costReduction;
				$('.energyTotal').text(energy);
				$('.costsTotal').text(costs);
				$('#slider1').hide();
				$('#slider2').show();
			}
		});


		$('.advice').draggable({
			revert: true
		});

	};
});
