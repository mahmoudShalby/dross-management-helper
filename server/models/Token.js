const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: { type: 'UUID', ref: 'User'},
    token: String
}, { timestams: true });

module.exports = model('Token', schema);
