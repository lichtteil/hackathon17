

define(['jquery', 'https://www.gstatic.com/charts/loader.js'], function($) {
	return function () {

		if ($('#chartFirstReport').length === 0) {
			return;
		}

		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Typ', 'Eigener Verbrauch', {role: 'style'}, 'Mitbewerber mit geringstem Verbrauch', {role: 'style'}, 'Branchen-Durchschnitt'],
				['Leuchtmittel',	900,	'#FDD835', 938,	'#9E9E9E',	950, ],
				['Drucker',			1300, '#2CCCE4',	1120,	'#9E9E9E',	1200],
				['Monitore',		1167, '#8C9EFF',	1207,	'#9E9E9E',	1180],
				['Server',			1210, '#B8E986',	1010,	'#9E9E9E',	1100]
			  ]);

			var options = {
				vAxis: {title: 'Kosten/€'},
				hAxis: {title: 'Verbrauchertyp'},
				seriesType: 'bars',
				series: {
					2: {type: 'steppedArea', color: '#D2DDE7'}
				},
				legend: {position: 'none'}
			};

			var chart = new google.visualization.ComboChart(document.getElementById('chartFirstReport'));
			chart.draw(data, options);
		}

	};
});