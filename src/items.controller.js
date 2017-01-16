(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'CategoriesService', 'items'];
function ItemsController($stateParams, CategoriesService, items) {
  var itemDetail = this;
  // if (items !== 'undefined' && items.length > 0) {
    // var item = items[$stateParams.itemId];
    // var promise = CategoriesService.getItemsForCategory(item.short_name);
    // promise.then(function(response){
    //   console.log('Response: ' + response.status + " " + response.statusText);
    itemDetail.category = items.data.category;
    itemDetail.items = items.data.menu_items;
    // });
  // }
}

})();
