

define(['jquery',
		'app/sampleChart',
		'app/firstReport',
		'app/adviceList',
		'app/distributionSlider',
		'app/testlabAdvices',
		'app/adviceListSlider',
		'app/overlays'
		], function($, initSampleChart, initFirstReport, initAdviceList, initDistributionSlider, initTestlabAdvices, initadviceListSlider) {

	initSampleChart();
	initAdviceList();
	initFirstReport();
	initDistributionSlider();
	initTestlabAdvices();
	initadviceListSlider();

});