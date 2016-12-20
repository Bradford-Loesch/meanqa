app.controller('CreateController', ['$scope', '$location', '$routeParams', 'QuestionFactory', function($scope, $location, $routeParams, QuestionFactory) {
    setUser = function(data) {
        $scope.loginUser = data;
    }
    QuestionFactory.checkuser(setUser);

    $scope.id = $routeParams.id;

    function callback() {
        $location.url('/dashboard');
    }

    $scope.newQuestion = function() {
        if ($scope.question.content.length < 10) {
            $scope.errors = "Questions must be 10 characters or more."
        } else {
            QuestionFactory.newQuestion($scope.question, callback);
        }
    }

    $scope.newAnswer = function() {
        if ($scope.answer.content.length < 5) {
            $scope.errors = "Questions must be 5 characters or more."
        } else {
            QuestionFactory.newAnswer($scope.answer, callback);
        }
    }

}])
