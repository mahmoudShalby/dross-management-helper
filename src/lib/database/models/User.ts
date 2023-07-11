import { Schema, model } from 'mongoose'

export interface User {
    _id: Schema.Types.UUID
    username: string
    password: string
}

const usernameValidator = (value: User['username']) => /\w+/.test(value)

const schema = new Schema<User>({
    _id: Schema.Types.UUID,
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [usernameValidator, "username `{VALUE}` isn't valid."]
    },
    password: { type: String, required: true }
}, { timestamps: true })

export default model('User', schema)
