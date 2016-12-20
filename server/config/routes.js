var Users = require('./../controllers/Users.js');
var Questions = require('./../controllers/Questions.js');

module.exports = function(app) {
    app.get('/questions', Questions.index);
    app.get('/questions/:id', Questions.show);
    app.post('/questions', Questions.newQuestion);
    app.post('/questions/:id/answer', Questions.newAnswer)
    app.post('/questions/vote', Questions.vote);

    app.post('/users', Users.index);
}
