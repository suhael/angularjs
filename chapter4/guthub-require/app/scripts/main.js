// the app/scripts/main.js file, which defines our RequireJS config
require.config({
   paths: {
       angular: 'vendor/angular.min',
       jquery: 'vendor/jquery',
       domReady: 'vendor/domReady'
   },
   shim: {
       angular: {
           deps: [ 'jquery'],
           exports: 'angular'
       }
   }
});

require([
        'angular',
        'app',
        'domReady',
        'controllers/editController',
        'controllers/ingredientsController',
        'controllers/listController',
        'controllers/newController',
        'controllers/viewController',
        'services/recipeService',
        // 'services/recipeLoaderService',
        // 'services/multiRecipeLoaderService',
        'directives/butterbar',
        'directives/focus',
        // Any individual controller, service, directive or filter file
        // that you add will need to be pulled in here.
    ],
    function (angular, app, domReady) {
        'use strict';
        app.config(['$routeProvider',
                    function($routeProvider) {
                        $routeProvider.
                        when('/', {
                            controller: 'ListCtrl',
                            resolve: {
                                recipes: ["MultiRecipeLoader", function(MultiRecipeLoader) {
                                    return MultiRecipeLoader();
                                }]
                            },
                            templateUrl:'/views/list.html'
                        }).when('/edit/:recipeId', {
                            controller: 'EditCtrl',
                            resolve: {
                                recipe: ["RecipeLoader", function(RecipeLoader) {
                                    return RecipeLoader();
                                }]
                            },
                            templateUrl:'/views/recipeForm.html'
                        }).when('/view/:recipeId', {
                            controller: 'ViewCtrl',
                            resolve: {
                                recipe: ["RecipeLoader", function(RecipeLoader) {
                                    return RecipeLoader();
                                }]
                            },
                            templateUrl:'/views/viewRecipe.html'
                        }).when('/new', {
                            controller: 'NewCtrl',
                            templateUrl:'/views/recipeForm.html'
                        }).otherwise({redirectTo:'/'});
                    }
                   ]);
        domReady(function() {
            angular.bootstrap(document, ['MyApp']);
    
            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: MyApp');
        });
    }
);
