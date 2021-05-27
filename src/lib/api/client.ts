import axios from 'axios';

const client = axios.create({
    // withCredentials: true,
});

client.defaults.baseURL =
    process.env.REACT_APP_ENV === 'local' ? 'http://localhost:3001' : process.env.REACT_APP_API_HOST;
const auth = localStorage.getItem('accessToken');
if (auth) {
    // eslint-disable-next-line dot-notation
    client.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
}

export default client;
