

define(['jquery', 'https://www.gstatic.com/charts/loader.js'], function($) {
	return function () {

		google.charts.load("43", {packages:["bar"]});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
			['', 'Mein Unternehmen', 'Branchenvergleich'],
			['Drucker',  1000,      400],
			['Lampen',  1170,      460],
			['Server',  660,       1120],
			['Klimatechnik',  1030,      540]
		]);

		var options = {
		};

		var chart = new google.charts.Bar(document.getElementById('chart_div'));
			chart.draw(data, options);
		}

	};
});