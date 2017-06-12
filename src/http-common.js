import axios from 'axios';
export const HTTP = axios.create({
  baseURL: `http://dev-apis.oracleau.cloud:3006`,
  headers: {
    
  }
})