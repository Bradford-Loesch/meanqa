app.controller('QuestionController', ['$scope', 'QuestionFactory', function($scope, QuestionFactory) {
    setUser = function(data) {
        $scope.loginUser = data;
    }
    QuestionFactory.checkuser(setUser);

    function setQuestions(data) {
        $scope.questions = data;
    }
    $scope.getQuestions = function() {
        QuestionFactory.index(function(returnData) {
            setQuestions(returnData);
        })
    }
    $scope.getQuestions();

    $scope.logout = function() {
        QuestionFactory.logout();
    }
}])
