// The app/scripts/app.js file, which defines our AngularJS app
define(['angular', 'controllers/controllers','services/services','directives/directives', 'user/user'], function (angular) {
    return angular.module('MyApp', ['controllers','services','directives', 'App.User']);
});
