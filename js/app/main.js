

define(['jquery',
		'app/sampleChart',
		'app/firstReport',
		'app/adviceList',
		'app/distributionSlider'
		], function($, initSampleChart, initFirstReport, initAdviceList, initDistributionSlider) {

	console.log('hello!');

	initSampleChart();
	initAdviceList();
	initFirstReport();
	initDistributionSlider();

});