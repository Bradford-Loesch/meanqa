app.controller('ShowController', ['$scope', '$routeParams', 'QuestionFactory', function($scope, $routeParams, QuestionFactory) {
    setUser = function(data) {
        $scope.loginUser = data;
    }
    QuestionFactory.checkuser(setUser);

    function setQuestion(data) {
        $scope.question = data;
    }
    $scope.show = function() {
        QuestionFactory.show(setQuestion);
    }
    $scope.show();

    $scope.vote = function(option) {
        QuestionFactory.vote(option, setQuestion);
    }
}])
