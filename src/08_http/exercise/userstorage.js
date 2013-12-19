angular.module('userstorageHttp', [])

  .constant('BASE_URL', 'https://api.mongolab.com/api/1/databases/allegro/collections/users')

  .constant('API_KEY', '4fb51e55e4b02e56a67b0b66')

  .factory('UserStorage', function ($http, BASE_URL, API_KEY) {

    function getResponseData(response) {
      return response.data;
    }

    // AngularJS services are singletons
    var UserStorage = {};

    UserStorage.save = function (user) {
      if (user._id) {
        var userId = user._id.$oid;
        var userCp = angular.copy(user);
        delete userCp._id;
        return $http.put(BASE_URL + '/' + userId, userCp, {params: {
          apiKey: API_KEY
        }}).then(function (response) {
            return response.data;
          });
      } else {
        return $http.post(BASE_URL, user, {params: {
          apiKey: API_KEY
        }}).then(function (response) {
            return response.data;
          });
      }
    };

    UserStorage.remove = function (userId) {
      return $http.delete(BASE_URL + '/' + userId, {params: {
        apiKey: API_KEY
      }}).then(function (response) {
          return response.data;
        });
    };

    // slide:start:api;
    UserStorage.getById = function (userId) {
      return $http.get(BASE_URL + '/' + userId, {params: {
        apiKey: API_KEY
      }}).then(function (response) {
          return response.data;
        });
    };
    // slide:end

    UserStorage.getAll = function () {
      return $http.get(BASE_URL, {params: {
        apiKey: API_KEY
      }}).then(function (response) {
          return response.data;
        });
    };

    return UserStorage;
  });