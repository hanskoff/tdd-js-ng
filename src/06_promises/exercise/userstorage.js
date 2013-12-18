angular.module('userstorageAsync', [])

    .factory('UserStorage', function ($q) {

        var users = {};

        // Sequence can now be encapsulated (was exposed on a constructor function before)
        var sequence = 1;

        // AngularJS services are singletons
        var UserStorage = {};

        UserStorage.save = function (user) {
            if (!user.id) {
                user.id = sequence++;
            }
            users[user.id] = user;

            return $q.when(user);
        };

        UserStorage.remove = function (userId) {
            var toBeDeleted = UserStorage.getById(userId);
            if (toBeDeleted) {
                delete users[userId];
            }

            return $q.when(toBeDeleted);
        };

        UserStorage.getById = function (userId) {
            //$q when wraps a value into a promise that will resolve to the passed-in value
            return $q.when(users[userId] || null);
        };

        UserStorage.getAll = function () {
            var result = [];
            for (var userId in users) {
                result.push(users[userId]);
            }
            return $q.when(result);
        };

        return UserStorage;
    });