app.factory('QuestionFactory', ['$http', '$routeParams', '$location', function($http, $routeParams, $location) {
    var factory = {};
    loginUser = false;
    questions = [];
    factory.index = function(callback) {
        $http.get('/questions').then(function(data) {
            questions = data.data;
            callback(questions);
        }, function(err) {
            console.log(err);
        });
    }
    factory.show = function(callback) {
        $http.get(`/questions/${$routeParams.id}`).then(function(data) {
            question = data.data;
            callback(question);
        }, function(err) {
            console.log(err);
        });
    }
    factory.newQuestion = function(question, callback) {
        $http.post('/questions', question).then(callback(), function(err) {
            console.log(err);
        });
    }
    factory.newAnswer = function(answer, callback) {
        answer._author = loginUser._id;
        $http.post(`/questions/${$routeParams.id}/answer`, answer).then(callback(), function(err) {
            console.log(err);
        });
    }
    factory.vote = function(option, callback) {
        $http.post(`questions/vote/`, {id: $routeParams.id, option: option}).then(factory.show(callback), function(err) {
            console.log(err);
        });
    }
    factory.delete = function(id, callback) {
        $http.delete(`/questions/${id}`).then(this.index(callback), function(err) {
            console.log(err);
        });
    }

    factory.login = function(user) {
        $http.post('/users', user).then(function(data) {
            loginUser = data.data;
            $location.url('/dashboard');
        }, function(err) {
            console.log(err);
        });
    }
    factory.logout = function() {
        loginUser = false;
        $location.url('/');
    }
    factory.checkuser = function(callback) {
        if (!loginUser) {
            $location.url('/');
        } else {
            callback(loginUser);
        }
    }
    return factory;
}])
