const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'question' });

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;