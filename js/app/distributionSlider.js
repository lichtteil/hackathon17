

define(['jquery', 'http://www.bacubacu.com/colresizable/js/colResizable-1.5.min.js'], function($) {
	return function () {

		function createSlider(container, sliderId, config) {
			
			if ($('#distributionSlider').length === 0) {
				return;
			}
		
		  var tableEl = document.createElement("table");
		  tableEl.setAttribute("width", "500px");
		  tableEl.setAttribute("class", "sliderTable");
		  tableEl.setAttribute("id", sliderId);
		  var tBodyEl = document.createElement("tbody");
		  tableEl.appendChild(tBodyEl);
		  var trEl = document.createElement("tr");
		  tBodyEl.appendChild(trEl);
		  var totalWeight = 0;
		  for(i=0; i<config.length; i++) {
			totalWeight += config[i].weight;
		  }
		  for (i = 0; i<config.length; i++) {
			var tdEl = document.createElement("td");
			var celPercent = parseInt(config[i].weight/totalWeight * 100);
			tdEl.setAttribute("width", celPercent + "%");
			tdEl.setAttribute("height", "30px");
			tdEl.setAttribute("class", "sliderTd");
			trEl.appendChild(tdEl);
			$(tdEl).html("<div class='sliderBar barColor"+i+"'></div><div class='edge left edgeColor"+i+"'></div><div class='edge right edgeColor"+i+"'></div><div class='sliderTooltip edgeColor"+i+"'><div class='sliderTooltipHeader barColor"+i+"'></div></div>");
		  }
			container.appendChild(tableEl);
			
			$('#'+sliderId).colResizable({
			liveDrag:true,
		//    gripInnerHtml:"<div class='grip'></div>", 
		//    draggingClass:"dragging",
			onResize:onSlider,
				});
		}
		
		var container = document.getElementById('distributionSlider');
		
		createSlider(container, "slider1", [
			{weight: 10, header: 'Drucker'},
			{weight:20, header: 'Leuchtmittel'},
			{weight:50, header: 'Computer'},
			{weight:20, header: 'Server'}]
		);

	};
});