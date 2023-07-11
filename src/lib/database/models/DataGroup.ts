import { Schema, model } from 'mongoose'

export interface DataGroup {
    _id: Schema.Types.UUID
    owner_id: Schema.Types.UUID
    name: string
    children: Schema.Types.UUID
}

const schema = new Schema<DataGroup>({
    _id: Schema.Types.UUID,
    owner_id: { type: Schema.Types.UUID, ref: 'User', required: false},
    name: String,
    children: [{ type: Schema.Types.UUID, ref: 'DataGroup' }]
}, { timestamps: true })

export default model('DataGroup', schema);
