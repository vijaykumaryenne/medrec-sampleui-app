import axios from 'axios';
export const HTTP = axios.create({
  baseURL: `http://localhost:9000/`,
  headers: {
    
  }
})