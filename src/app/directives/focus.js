define(['directives/directives'], function(directives) {
    directives.directive('focus', ['$rootScope', function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                element[0].focus();
            }
        };
    }]);
});
