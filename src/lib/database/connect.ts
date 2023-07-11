import { connect } from 'mongoose'
import { DATABASE_URL } from '$env/static/public'

connect(DATABASE_URL)
