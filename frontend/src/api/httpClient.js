import axios from 'axios';

const httpClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
});

httpClient.defaults.baseURL = process.env.BASE_URL + 'api/';

window.axios = httpClient;

export default httpClient;
