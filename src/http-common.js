import axios from 'axios';

export default axios.create({
  baseURL: 'https://edee-83-234-227-29.ngrok-free.app',
  headers: {
    'Content-type': 'application/json'
  }
});
