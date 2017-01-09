'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('OrderCtrl', ['orderManager', function(orderManager) {
  	this.list = orderManager.getOrders();

  	this.setActiveDay = function(day) {
  		orderManager.setActiveDay(day);
  	};
  }]);
