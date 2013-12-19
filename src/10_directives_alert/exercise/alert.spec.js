describe("alert", function () {

  var $scope, $compile;

  beforeEach(module('bs.alert'));
  beforeEach(module('templates'));

  beforeEach(inject(function ($rootScope, _$compile_) {
    $scope = $rootScope;
    $compile = _$compile_;
  }));

  function compileElement(elementString, scope) {
    var element = $compile(elementString)(scope);
    scope.$digest();
    return element;
  }

  function findCloseButton(element) {
    return element.find('button.close');
  }

  it('should set "warning" CSS class by default', function () {
    // when
    var element = compileElement('<bs-alert>Default</bs-alert>', $scope);

    // then
    expect(element.find('div.alert')).toHaveClass('alert-warning');
  });

  it('should set appropriate CSS class based on the alert type', function () {
    // when
    var element = compileElement('<bs-alert type="mielonka">Default</bs-alert>', $scope);

    // then
    expect(element.find('div.alert')).toHaveClass('alert-mielonka');
  });

  it('should not show close buttons if no close callback specified', function () {
    // when
    var element = compileElement('<bs-alert>Default</bs-alert>', $scope);

    // then
     expect(element.find('button.close')).toHaveClass('ng-hide');
  });

  it('should show close buttons if a close callback specified', function () {
    // when
    $scope.callback = function () {};
    var element = compileElement('<bs-alert close="callback()">Default</bs-alert>', $scope);

    // then
     expect(element.find('button.close')).not.toHaveClass('ng-hide');
  });

  it('should fire callback when closed', function () {
    // given
    $scope.callback = function () {};
    spyOn($scope, 'callback');

    // when
    var element = compileElement('<bs-alert close="callback()">Default</bs-alert>', $scope);
    element.find('button.close').click();

    // then
    expect($scope.callback).toHaveBeenCalled();
    expect($scope.callback.callCount).toEqual(1);
  });

});