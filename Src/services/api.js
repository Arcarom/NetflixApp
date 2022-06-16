import axios from 'axios';

const api = axios.create({
  baseURL: '', //url do servidor
});

export default api;
