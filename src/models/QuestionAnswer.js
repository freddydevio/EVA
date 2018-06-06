const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const QuestionAnswerSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'question_answer' });

const QuestionAnswer = mongoose.model('QuestionAnswer', QuestionAnswerSchema);

module.exports = QuestionAnswer;