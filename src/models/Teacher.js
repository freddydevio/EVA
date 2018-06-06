const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { collection: 'teacher' });

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;