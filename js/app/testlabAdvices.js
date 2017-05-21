

define(['jquery', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], function($) {
	return function () {

		function addPoints(nStr) {
			nStr += '';
			var x = nStr.split('.');
			var x1 = x[0];
			var x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + '.' + '$2');
			}
			return x1 + x2;
		}

		$('.adviceDroppable, #lightsSlider').droppable({
			accept: ".advice",
			tolerance: 'pointer',
			drop: function( event, ui ) {
				var advice = ui.draggable;
				$(advice).addClass('active');

				var energyReduction = parseInt($(advice).attr('data-energy-reduction'));
				var costReduction = parseInt($(advice).attr('data-cost-reduction'));
				var energy = parseInt($('.energyTotal').attr('data-energy-total')) - energyReduction;
				var costs = parseInt($('.costsTotal').attr('data-costs-total')) - costReduction;

				$('.energyTotal').text(addPoints(energy));
				$('.costsTotal').text(addPoints(costs));

				$('.energyTotal').attr('data-energy-total') = energy;
				$('.energyTotal').attr('data-costs-total') = costs;

				$('#slider1').hide();
				$('#slider2').show();
			}
		});


		$('.advice').draggable({
			revert: true
		});

	};
});
