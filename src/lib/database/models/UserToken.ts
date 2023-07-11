import { Schema, model } from 'mongoose'

export interface UserToken {
    user_id: Schema.Types.UUID
    token: string
}

const schema = new Schema<UserToken>({
    user_id: { type: Schema.Types.UUID, ref: 'User' },
    token: String
}, { timestamps: true })

export default model('UserToken', schema)
