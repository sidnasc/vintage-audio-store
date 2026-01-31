import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Conecta ao seu Backend Node.js
});

export default api;