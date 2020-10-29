import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? '54.213.252.222' : 'localhost';

const api = axios.create({
  baseURL: `http://${url}:3333`
})

export default api;
