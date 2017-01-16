(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main.template.html',
    controller: 'MainController as cats',
    resolve: {
      items: ['CategoriesService', function (CategoriesService) {
        return CategoriesService.getItems();
      }]
    }
  })

  .state('categories.item', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: "ItemsController as itemDetail",
    params: {
      itemId: null
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: "ItemsController as itemDetail",
    resolve: {
      items: ['CategoriesService', '$stateParams', function (CategoriesService, $stateParams) {
        return CategoriesService.getItemsForCategory($stateParams.itemId);
      }]
    }
    // ,
    // params: {
    //   itemId: null
    // }
  });

}

})();
