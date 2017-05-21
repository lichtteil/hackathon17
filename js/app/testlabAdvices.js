

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

		$('.advicedroppable').droppable({
			accept: ".advice",
			tolerance: 'pointer',
			drop: function( event, ui ) {
				var advice = ui.draggable;
				$(advice).addClass('active');

				var energyReduction = parseInt($(advice).attr('data-energy-reduction'));
				var costReduction = parseInt($(advice).attr('data-cost-reduction'));
				var energy = parseInt($('.energytotal').attr('data-energy-total')) - energyReduction;
				var costs = parseInt($('.coststotal').attr('data-costs-total')) - costReduction;

				$('.energytotal').text(addPoints(energy) + ' kWh');
				$('.coststotal').text(addPoints(costs) + '€');

				$('.energytotal').attr('data-energy-total', energy);
				$('.coststotal').attr('data-costs-total', costs);

				$('#slider1').hide();
				$('#slider2').show();

				$(advice).draggable('destroy');
			}
		});


		$('.advice').draggable({
			revert: true,
			helper : 'clone'
		});

	};
});
