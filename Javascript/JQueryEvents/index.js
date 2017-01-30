$(document).ready(function() {
	var myListener  = {
		ON_CALL: function() {
			$('.inner').append("<div>Listened Event ON_CALL on the Object<div>");
			//alert('ON_CALL called');
		},
		ON_ASSIGN: function(data) {
			if(data.hasOwnProperty("id") && data.hasOwnProperty("name")) {
				return 'ON_ASSIGN called';
			}
		}
	};

	$(myListener).on('ON_CALL', myListener.ON_CALL);

	$(myListener).on('ON_ASSIGN', { id: 1, name: 'daniele'}, function(ev) {
		
			console.log('Im here and props are ' + ev.data.id + ' ' + ev.data.name);
			var val = myListener.ON_ASSIGN(ev.data);
			$('.inner').append("Listened Event ON_ASSIGN On the Object with return value of " + val);
		
	});

	$("#ON_CALL_trigger").click(function() {
		$(myListener).triggerHandler("ON_CALL");
	});
	$("#ON_ASSIGN_trigger").click(function() {
		$(myListener).triggerHandler("ON_ASSIGN");
	});
});