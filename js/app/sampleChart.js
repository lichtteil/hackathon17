

define(['jquery', 'https://www.gstatic.com/charts/loader.js'], function($) {
	return function () {

		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Typ', 'Eigener Verbrauch', 'Mitbewerber mit geringstem Verbrauch', 'Branchen-Durchschnitt'],
				['Leuchtmittel',	900,	938,	950],
				['Drucker',			1300,	1120,	1200],
				['Monitore',		1167,	1207,	1180],
				['Server',			1210,	1010,	1100],
				['2008/09',			991,	1191,	1000]
			  ]);

			var options = {
				vAxis: {title: 'Kosten/€'},
				hAxis: {title: 'Verbrauchertyp'},
				seriesType: 'bars',
				series: {2: {type: 'steppedArea'}}
			};

			var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
			chart.draw(data, options);
		}

	};
});