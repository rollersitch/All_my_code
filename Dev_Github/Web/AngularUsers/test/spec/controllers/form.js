'use strict';

describe('Controller: FormctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularUsersApp'));

  var FormctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormctrlCtrl = $controller('FormctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FormctrlCtrl.awesomeThings.length).toBe(3);
  });
});
