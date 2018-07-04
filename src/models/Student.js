const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const StudentSchema = new Schema({
    email: { type: String, required: true, uniqe: true },
    schoolClass: { type: Number, required: true }
}, { collection: 'student' });

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;