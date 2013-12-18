describe('Async user storage', function () {

    var $scope;
    var $q;
    var userStorage;

    // load services defined in a given modules
    beforeEach(module('userstorageAsync'));
    beforeEach(inject(function (_$rootScope_, _UserStorage_, _$q_) {
        $scope = _$rootScope_;
        userStorage = _UserStorage_;
        $q = _$q_;
    }));

    function promiseValue(promise) {
        var valueToReturn;

        promise.then(function (valueFromPromise) {
            valueToReturn = valueFromPromise;
        }, function (rejectionReason) {
            throw new Error(rejectionReason);
        });

        $scope.$digest();

        return valueToReturn;
    }

    // remaining tests are unchanged, we've only modified instantiation method
    describe('basic CRUD operations', function () {

        it('should allow adding and querying users by id', function () {
            // given:
            var user = promiseValue(userStorage.save({ "name": "Greg" }));

            // when:
            var promise = userStorage.getById(user.id);

            // then:
            expect(user.id).toBeDefined();
            expect(promiseValue(promise)).toEqual(user);
        });

        it('should allow querying all users', function () {
            // given:
            var savedUsers = [];
            $q.all([userStorage.save({name: 'foo'}), userStorage.save({name: 'bar'})]).then(function (result) {
                savedUsers = result;
            }, function (rejectionReason) {
                throw new Error(rejectionReason);
            });
            $scope.$digest();

            // when:
            var loadedUsers = promiseValue(userStorage.getAll());

            // then:
            expect(loadedUsers.length).toEqual(2);
            expect(loadedUsers).toContain(savedUsers[0]);
            expect(loadedUsers).toContain(savedUsers[1]);
        });

        it('should support removing users by id', function () {
        });

    });

    describe('corner cases', function () {

        it('should return null for non existing users', function () {
        });

    });

});