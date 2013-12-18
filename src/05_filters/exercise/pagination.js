angular.module('pagination', [])
  .filter('pagination', function () {
    return function (inputArray, selectedPage, pageSize) {
      return inputArray.slice(0,pageSize);
    };
  });
