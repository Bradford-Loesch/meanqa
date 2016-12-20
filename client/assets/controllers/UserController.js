app.controller('UserController', ['$scope', '$location', 'QuestionFactory', function($scope, $location, QuestionFactory) {

    $scope.login = function() {
        QuestionFactory.login($scope.user);
    }

}])
