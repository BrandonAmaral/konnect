import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@nightcrawler:token')}`,
  },
});

export default api;
