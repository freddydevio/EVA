const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TokenSchema = new Schema({
    /**
     * TODO CREATE SCHEMA!
     */
}, { collection: 'token' });

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;