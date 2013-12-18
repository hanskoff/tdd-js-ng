describe('users controller', function () {

    var $scope, $controller;
    var userStorage;

    // let's load real dependencies so those are called if not mocked
    beforeEach(module('userstorage'));
    //slide:start:module;
    beforeEach(module('users'));
    beforeEach(inject(function (_$rootScope_, _$controller_, _UserStorage_) {
        $scope = _$rootScope_.$new();
        // now it should be more obvious why we use underscores
        $controller = _$controller_;
        userStorage = _UserStorage_;
    }));
    //slide:end

    it('should initialize scope with an empty users collection', function () {
        // given:

        // when:
        $controller('UsersCtrl', { '$scope': $scope});

        // then:
        expect($scope.users.length).toEqual(0);
    });

    it('should save a current user and update users list', function () {
    });

    it('should dirty check and allow clearing user edits', function () {
    });

    it('should remove a selected user', function () {
    });

    it('should support editing users', function () {
    });

});