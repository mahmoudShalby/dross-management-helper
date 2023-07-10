import axios from 'axios'

SERVER_URL = 'localhost:8000'

export const post = async (url: string, data?: unknown) => {
  axios.post(`${SERVER_URL}/${url}`, data)
}
