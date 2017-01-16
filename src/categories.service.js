(function () {
'use strict';

angular.module('data')
.service('CategoriesService', CategoriesService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

CategoriesService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function CategoriesService($q, $timeout, $http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    }).then(function(response){
      console.log('Response: ' + response.status + " " + response.statusText);
      var data = response.data;
      return data;
    }, function(response){
      console.log('Error: ' + response.status + " " + response.statusText);
    });
    return response;
  };

  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  };

  service.getItemsForCategoryX = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  };

}

})();
