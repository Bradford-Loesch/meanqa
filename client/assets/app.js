var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/question/:id', {
            templateUrl: 'partials/show.html'
        })
        .when('/new_question', {
            templateUrl: 'partials/newquestion.html'
        })
        .when('/question/:id/new_answer', {
            templateUrl: 'partials/newanswer.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
