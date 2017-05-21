

define(['jquery', 'http://www.bacubacu.com/colresizable/js/colResizable-1.5.min.js'], function($) {
	jQuery = $;
	return function () {

		if ($('#lightsSlider').length === 0) {
			return;
		}
		
		function createSlider(container, sliderId, config) {
			

		  var tableEl = document.createElement("table");
		  tableEl.setAttribute("class", "sliderTable percentTable");
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
			$(tdEl).html("<div class='sliderBar percentBarColor"+i+"'></div><div class='edge left percentEdgeColor"+i+"'></div><div class='edge right percentEdgeColor"+i+"'></div><div class='sliderTooltip percentEdgeColor"+i+"'><div class='sliderTooltipHeader percentBarColor"+i+"'><span>" + config[i].header +"</span></div><span'></span>" + config[i].weight + " %</div>");
		  }
			container.appendChild(tableEl);
			
			$('#'+sliderId).colResizable({
			liveDrag:true
				});
		}
		var container = document.getElementById('lightsSlider');
		
		var div1 = document.createElement("div");
		div1.setAttribute("id", "slider1");
		div1.setClass("class", "percentTable");
		container.appendChild(div1);
		var div2 = document.createElement("div");
		div2.setAttribute("id", "slider2");
		div2.setClass("class", "percentTable");
		container.appendChild(div2);
		var div3 = document.createElement("div");
		div3.setAttribute("id", "slider3");
		div3.setClass("class", "percentTable");
		container.appendChild(div3);
		
		var sliderConfig1 = [
			{weight:25, header: 'Glühlampen'},
			{weight:50, header: 'Leuchtstoffröhren'},
			{weight:25, header: 'Halogen'}
		];
		createSlider(div1, "slider1Table", sliderConfig1);
		// $('#slider1').hide();
		
		var sliderConfig2 = [
			{weight:5, header: 'LEDs'},
			{weight:65, header: 'Leuchtstoffröhren'},
			{weight:30, header: 'Halogen'}
		];
		createSlider(div2, "slider2Table", sliderConfig2);
		$('#slider2').hide();
	
		var sliderConfig3 = [
			{weight:5, header: 'LEDs'},
			{weight:65, header: 'Leuchtstoffröhren'},
			{weight:30, header: 'Halogen'}
		];
		createSlider(div3, "slider3Table", sliderConfig3);
		$('#slider3').hide();
		
	};
});