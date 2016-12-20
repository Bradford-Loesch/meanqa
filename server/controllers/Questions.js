var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

function Questions() {
    this.index = function(req, res) {
        Question.find({}, function(err, questions) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(questions);
            }
        });
    }
    this.show = function(req, res) {
        Question.findOne({_id: req.params.id}).populate('answers._author').exec(function(err, question) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(question);
                res.json(question);
            }
        });
    }
    this.newQuestion = function(req, res) {
        var questionInstance = new Question(req.body);
        questionInstance.save(function(err){
            if(err){
                console.log(err);
                res.json(err);
            }
            else {
                console.log("Succesfully saved item");
                res.json(questionInstance);
            }
        });
    }
    this.newAnswer = function(req, res) {
        Question.findById(req.params.id, function(err, questionInstance) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                questionInstance.answers.push(req.body)
                questionInstance.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    else {
                        console.log("Succesfully saved item");
                        res.json(questionInstance);
                    }
                });
            }
        });
    }
    this.vote = function(req, res) {
        Question.findById(req.body.id, function(err, questionInstance){
            if(err){
                console.log(err);
            }
            else {
                var answers = questionInstance.answers;
                var answerInstance = questionInstance.answers.id(req.body.option);
                answerInstance.votes += 1;
                console.log(questionInstance);
                questionInstance.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    else {
                        console.log("Succesfully voted item");
                        res.json(questionInstance);
                    }
                });
            }
        });
    }
}

module.exports = new Questions();
