const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const QuestionAnswerSchema = new Schema({
    answerId: { type: Number, required: true, unique: true },
    surveyId: { type: Number, required: true},
    questiondD: { type: Number, required: true},
    studentId: { type: Number, required: true},
    answer: { type: String, required: true}
}, { collection: 'question_answer' });

const QuestionAnswer = mongoose.model('QuestionAnswer', QuestionAnswerSchema);

module.exports = QuestionAnswer;