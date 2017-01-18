/* jshint esversion: 6 */

var deliveryBoy = {
	name: "John",

	handleMessage: function(message,handler) {
		handler(message);
	},

	receive: function () {
		this.handleMessage("Hello", mess => console.log(mess + ", " + this.name));
	}
};

deliveryBoy.receive();