

define(['jquery', 'http://www.bacubacu.com/colresizable/js/colResizable-1.5.min.js'], function($) {
	jQuery = $;
	return function () {

		function createSlider(container, sliderId, config) {
			
			if ($('#distributionSlider').length === 0 && $('#lightsSlider').length === 0) {
				return;
			}
		
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
			tdEl.setAttribute("class", "sliderTd");
			trEl.appendChild(tdEl);
			$(tdEl).html("<div class='sliderBar barColor"+i+"'></div><div class='edge left edgeColor"+i+"'></div><div class='edge right edgeColor"+i+"'></div><div class='sliderTooltip edgeColor"+i+"'><div class='sliderTooltipHeader barColor"+i+"'><span>" + config[i].header +"</span></div><span id='countSpan" + i +"'></span> Stück<br/><span id='consumptionSpan"+i+"'></span> kWh</div>");
		  }
			container.appendChild(tableEl);
		  var totalLabel = document.createElement("span");
		  tableEl.setAttribute("class", "totalConsumption");
		  $(tableEl).html(totalWeight + " kWh");
			
			$('#'+sliderId).colResizable({
			liveDrag:true,
		//    gripInnerHtml:"<div class='grip'></div>", 
		//    draggingClass:"dragging",
			onResize:onSlider,
				});
		}
		
		var onSlider = function() {
			var columns = $('#slider1').find("td");
			console.log(columns);
			var ranges = [], total = 0, i, w;
			for(i = 0; i<columns.length; i++){
				w = columns.eq(i).width()-10 - (i==0?1:0);
				ranges.push(w);
				total+=w;
			}		 
			for(i=0; i<columns.length; i++){			
				ranges[i] = ranges[i]/total;
				carriage = ranges[i]-w;
				$('#countSpan'+i).html(parseInt(sliderConfig[i].count*ranges[i]/sliderConfig[i].initialRatio));
				$('#consumptionSpan'+i).html(parseInt(sliderConfig[i].consumption*ranges[i]/sliderConfig[i].initialRatio));
			}
		}
		
		if ($('#lightsSlider').length === 1) {
			
		} else {
			var container = document.getElementById('distributionSlider');
			
			sliderConfig = [
				{weight:540000, header: 'Leuchtmittel', count: 4500, consumption: 540000},
				{weight:420000, header: 'Computer', count: 1500, consumption: 420000},
				{weight:210000, header: 'Monitore', count: 1500, consumption: 210000},
				{weight:120000, header: 'Server', count: 30, consumption: 120000},
	//			{weight: 5000, header: 'Drucker', count: 8, consumption: 5000}
			];
			totalSliderWeight = 0;
			for (i = 0; i<sliderConfig.length; i++) {
				totalSliderWeight += sliderConfig[i].weight;
			}
			for (i = 0; i<sliderConfig.length; i++) {
				sliderConfig[i].initialRatio = sliderConfig[i].weight/totalSliderWeight;
			}
			
			totalConsumption = 3300000;
			
			createSlider(container, "slider1", sliderConfig);
			onSlider();
		}
	};
});