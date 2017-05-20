

define(['jquery',
		'app/sampleChart',
		'app/firstReport',
		'app/adviceList'
		], function($, initSampleChart, initFirstReport, initAdviceList) {

	console.log('hello!');

	initSampleChart();
	initAdviceList();
	initFirstReport();

});