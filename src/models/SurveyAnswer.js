const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SurveyAnswerSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'survey_answer' });

const SurveyAnswer = mongoose.model('SurveyAnswer', SurveyAnswerSchema);

module.exports = SurveyAnswer;