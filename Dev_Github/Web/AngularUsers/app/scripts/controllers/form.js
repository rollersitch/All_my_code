'use strict';

/**
 * @ngdoc function
 * @name angularUsersApp.controller:FormctrlCtrl
 * @description
 * # FormctrlCtrl
 * Controller of the angularUsersApp
 */
angular.module('angularUsersApp')
  .controller('formCtrl', ['userCRUD', function (userCRUD) {

  	var ctrl = this;

  	var id = 0;

  	this.users = [];

  	userCRUD.getUsers().then(function(data) {
  		ctrl.users = data;
  	});


  	this.userToAdd = {
  		id: 0,
  		name: 'John',
  		age: 10,
  		gender: 'male'
  	};
  	
  	this.createNewUser = function(userToAdd) {
  		//console.log(userToAdd);
  		userToAdd.id = ++id;
  		ctrl.users.push(userToAdd);
  		//ctrl.userToAdd 
  		ctrl.userToAdd = {
  		id: 0,
  		name: 'John',
  		age: 10,
  		gender: 'male'
  		};
  	};

  	this.deleteUser = function(user) {
  		//ctrl.users[0].name = 'changed!';
  		var index = ctrl.users.indexOf(user);
  		ctrl.users.splice(index,1);
  	};

}]);