import axios from 'axios';

export default axios.create({
  baseURL: 'https://de20-83-234-227-25.ngrok-free.app',
  headers: {
    'Content-type': 'application/json'
  }
});
