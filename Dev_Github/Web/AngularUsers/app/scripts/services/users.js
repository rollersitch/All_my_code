'use strict';

/**
 * @ngdoc service
 * @name angularUsersApp.users
 * @description
 * # users
 * Service in the angularUsersApp.
 */
angular.module('angularUsersApp')
  .service('userProvider', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getUsers = function() {
    	return $.get('list/users.json');
    };
  });
