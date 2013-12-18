describe('users controller', function () {

  var $scope;

  // slide:start:ctrl;
  beforeEach(inject(function (_$rootScope_, _$controller_) {
      $scope = _$rootScope_; //.$new();

      usersCtrl = _$controller_('UsersCtrl', {
        '$scope': $scope
      });

      //UsersCtrl($scope);
  }));

  it('should initialize scope with an empty users collection', function () {
      expect($scope.cleanUser).toEqual({});
      expect($scope.users.length).toEqual(0);
  });
  // slide:end

  it('should save a current user and update users list', function () {
    // given
    $scope.user = {
      name: 'Pawel'
    };

    // when
    $scope.save();

    // then
    expect($scope.users.length).toEqual(1);
    expect($scope.users[0].name).toEqual('Pawel');
  });

  it('should dirty check and allow clearing user edits', function () {
  });

  it('should remove a selected user', function () {
  });

  it('should support editing users', function () {
  });

});