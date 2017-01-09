'use strict';

describe('Controller: ListctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularUsersApp'));

  var ListctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListctrlCtrl = $controller('ListctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListctrlCtrl.awesomeThings.length).toBe(3);
  });
});
