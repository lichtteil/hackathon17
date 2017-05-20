

define(['jquery', 'http://www.bacubacu.com/colresizable/js/colResizable-1.5.min.js'], function($) {
	jQuery = $;
	return function () {

		if ($('#lightsSlider').length === 0) {
			return;
		}
		
		function createSlider(container, sliderId, config) {
			

		  var tableEl = document.createElement("table");
		  tableEl.setAttribute("class", "sliderTable");
		  tableEl.setAttribute("id", sliderId);
		  var tBodyEl = document.createElement("tbody");
		  tableEl.appendChild(tBodyEl);
		  var trEl = document.createElement("tr");
		  tBodyEl.appendChild(trEl);
		  totalWeight = 0;
		  for(i=0; i<config.length; i++) {
			totalWeight += config[i].weight;
		  }
		  for (i = 0; i<config.length; i++) {
			var tdEl = document.createElement("td");
			var celPercent = parseInt(config[i].weight/totalWeight * 100);
			tdEl.setAttribute("width", celPercent + "%");
			tdEl.setAttribute("height", "30px");
			tdEl.setAttribute("class", "sliderTd percentSlider");
			trEl.appendChild(tdEl);
			$(tdEl).html("<div class='sliderBar percentBarColor"+i+"'></div><div class='edge left percentEdgeColor"+i+"'></div><div class='edge right percentEdgeColor"+i+"'></div><div class='sliderTooltip percentEdgeColor"+i+"'><div class='sliderTooltipHeader percentBarColor"+i+"'><span>" + config[i].header +"</span></div><span id='percentSpan" + i +"'></span>" + config[i].weight + " %</div>");
		  }
			container.appendChild(tableEl);
			
			$('#'+sliderId).colResizable({
			liveDrag:true
				});
		}
		var container = document.getElementById('lightsSlider');
		
		sliderConfig = [
			{weight:25, header: 'Glühlampen'},
			{weight:50, header: 'Leuchtstoffröhren'},
			{weight:25, header: 'Halogen'}
		];
		createSlider(container, "slider1", sliderConfig);
	};
});