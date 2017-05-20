

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
		  totalWeight = 0;
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
			$(tdEl).html("<div class='sliderBar barColor"+i+"'></div><div class='edge left edgeColor"+i+"'></div><div class='edge right edgeColor"+i+"'></div><div class='sliderTooltip edgeColor"+i+"'><div class='sliderTooltipHeader barColor"+i+"'><span id='countSpan" + i +"'></span>Stück<br/><span id='consumptionSpan"+i+"'></span>kWh</div></div>");
		  }
			container.appendChild(tableEl);
			
			$('#'+sliderId).colResizable({
			liveDrag:true,
		//    gripInnerHtml:"<div class='grip'></div>", 
		//    draggingClass:"dragging",
			onResize:onSlider,
				});
		}
		
		var onSlider = function(e) {
			var columns = $(e.currentTarget).find("td");
			console.log(columns);
		  var ranges = [], total = 0, i, s = "Ranges: ", w;
			for(i = 0; i<columns.length; i++){
				w = columns.eq(i).width()-10 - (i==0?1:0);
				ranges.push(w);
				total+=w;
			}		 
			for(i=0; i<columns.length; i++){			
				ranges[i] = ranges[i]/total;
				carriage = ranges[i]-w;
				$('#countSpan'+i).html(sliderConfig[i].count*ranges[i]);
				$('#consumptionSpan'+i).html(sliderConfig[i].count*ranges[i]);
			}
		}
		
		
		var container = document.getElementById('distributionSlider');
		
		sliderConfig = [
			{weight:54000, header: 'Leuchtmittel', count: 450, consumption: 54000},
			{weight:42000, header: 'Computer', count: 150, consumption: 42000},
			{weight:21000, header: 'Monitore', count: 150, consumption: 21000},
			{weight:17000, header: 'Server', count: 10, consumption: 17000},
			{weight: 500, header: 'Drucker', count: 8, consumption: 500}
		];
		
		totalConsumption = 330000;
		
		createSlider(container, "slider1", sliderConfig);

	};
});