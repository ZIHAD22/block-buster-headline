import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_URL,
  headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
})

export default instance
