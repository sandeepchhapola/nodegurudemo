angular.module('nodeguru', [
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './partials/main.html',
                controller: 'mainController'
            }).when('/welcome', {
                templateUrl: './partials/welcome.html',
                controller: 'welcomeController'
            }).when('/about', {
                templateUrl: './partials/aboutus.html',
                controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
