'use strict';

describe('Controller: EventscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularFundamentalsApp'));

  var EventscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventscontrollerCtrl = $controller('EventscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
