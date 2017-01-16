(function () {
'use strict';

angular.module('MenuApp')
.controller('MainController', MainController);


MainController.$inject = ['CategoriesService', 'items'];
function MainController(CategoriesService, items) {
  var cats = this;
  cats.items = items;
}

})();
