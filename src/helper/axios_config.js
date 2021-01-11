import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const refreshAuthLogic = () => axios.get('/sanctum/csrf-cookie').then((response) => Promise.resolve());

createAuthRefreshInterceptor(axios, refreshAuthLogic, { statusCodes: [419, 401] });

export { axios as Axios };
