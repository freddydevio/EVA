const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const StudentSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'student' });

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;