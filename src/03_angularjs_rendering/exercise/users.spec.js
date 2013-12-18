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
    // given
    $scope.user = {
      name: 'Pawel'
    };

    //then
    expect($scope.hasEdits()).toBeTruthy();
  });

  it('should clear current user after save', function () {
    // given
    $scope.user = {
      name: 'Pawel'
    };

    // when
    $scope.save();

    // then
    expect($scope.hasEdits()).toBeFalsy();

  });

  it('should remove a selected user', function () {
    // given
    $scope.users = [{
      id: 1,
      name: 'Pawel'
    }];
    // when
    $scope.remove(1);

    // then
    expect($scope.users.length).toBe(0);
  });

  it('should support editing users', function () {
      // given
      var user = { id: 1, name: "Marian"};

      // when
      $scope.edit(user)

      // then
      expect($scope.user).toEqual(user);
      expect($scope.cleanUser).toEqual(user);
  });

});