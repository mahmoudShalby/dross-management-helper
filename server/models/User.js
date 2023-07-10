const { Schemam, model } = require('mongoose');

const schema = new Schema({
    _id: 'UUID'
    username: String,
    password: String
}, { timestams: true });

module.exports = model('User', schema);
