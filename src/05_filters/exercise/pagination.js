angular.module('pagination', [])
  .filter('pagination', function () {
    return function (inputArray, selectedPage, pageSize) {


      var startIndex = pageSize * selectedPage;
      return inputArray.slice(startIndex, startIndex + pageSize);
    };
  });
