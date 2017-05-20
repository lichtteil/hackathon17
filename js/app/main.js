

define(['jquery',
		'app/sampleChart',
		'app/firstReport',
		'app/adviceList',
		'app/distributionSlider',
		'app/testlabAdvices'
		], function($, initSampleChart, initFirstReport, initAdviceList, initDistributionSlider, initTestlabAdvices) {

	initSampleChart();
	initAdviceList();
	initFirstReport();
	initDistributionSlider();
	initTestlabAdvices();

});