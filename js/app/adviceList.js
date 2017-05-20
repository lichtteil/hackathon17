

define(['jquery', 'simpleCart', 'jquery.path'], function($, sCart) {
	return function() {

		$(document).ready(function() {

			simpleCart({
				checkout: {
					type: "PayPal",
					email: "you@yours.com"
				},
				cartColumns: [
					{ attr: "name", label: "Tipp"},
					{ view: "currency", attr: "price", label: false},
					{ view: "decrement", label: false},
					{ attr: "quantity", label: false},
					{ view: "increment", label: false},
					{ view: "currency", attr: "total", label: false },
					{ view: "remove", text: "Remove", label: false}
				],
				cartStyle: 'div'
			});

			simpleCart.ready(function() {
				simpleCart.bind( 'beforeAdd' , function( item ){
					if (simpleCart.has( item )) {
						return false;
					}
				});
				simpleCart.update();
			 });


			$('.item_add').click(function() {
				var item = $(this).closest('.simpleCart_shelfItem');
				var clone = $(item).clone(),
				position = $(item).position(),
				bezier_params = {
					start: {
						x: position.left,
						y: position.top,
						angle: -90
					},
					end: {
						x:500,
						y:500,
						angle: 180,
						length: .2
					}
				};

				clone.appendTo($(item).parent());
				//clone.addClass('fadeOutAnimation');
				clone.animate(
					{
						path : new $.path.bezier(bezier_params)
					},
					600,
					function() {
						$(this).remove();
					}
				);
			});

		});

	};
});