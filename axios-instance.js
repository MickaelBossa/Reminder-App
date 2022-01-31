import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://reminder-8b9d2-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default instance;
