const { Schema, model } = require('mongoose');

const schema = new Schema({
    _id: 'UUID',
    owner_id: { type: 'UUID', ref: 'User', required: false},
    name: String,
    children: [{ type: 'UUID', ref: 'DataGroup' }]
}, { timestams: true })

module.exports = model('DataGroup', schema);
