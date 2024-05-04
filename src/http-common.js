import axios from 'axios';

export default axios.create({
  baseURL: 'https://f8d4-83-234-227-28.ngrok-free.app',
  headers: {
    'Content-type': 'application/json'
  }
});
