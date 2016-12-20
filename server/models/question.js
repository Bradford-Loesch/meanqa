var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AnswerSchema = new mongoose.Schema({
    _author: { type: ObjectId, ref: 'User' },
    content: { type: String, required: true, minlength: 5 },
    details: String,
    votes: { type: Number, default: 0 },
})

var QuestionSchema = new mongoose.Schema({
    content: { type: String, required: true, minlength: 10 },
    description: String,
    answers: [AnswerSchema],
    }, { timestamps: true });

var Question = mongoose.model('Question', QuestionSchema);
