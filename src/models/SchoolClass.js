const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SchoolClassSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'school_class' });

const SchoolClass = mongoose.model('SchoolClass', SchoolClassSchema);

module.exports = SchoolClass;