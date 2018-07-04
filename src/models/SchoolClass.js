const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SchoolClassSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true }
}, { collection: 'school_class' });

const SchoolClass = mongoose.model('SchoolClass', SchoolClassSchema);

module.exports = SchoolClass;