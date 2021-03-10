import axios from 'axios';
import history from './history';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@konnect:token')}`,
  },
});

api.interceptors.response.use(
  (config) => config,
  (err) => {
    const { data } = err.response;

    if (data?.code === 'token.expired') {
      localStorage.clear();

      history.push('/');
      window.location.reload();
    }
  },
);

export default api;
