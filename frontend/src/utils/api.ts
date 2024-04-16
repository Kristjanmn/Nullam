import axios from 'axios';
import configData from '../config.json'

const API = axios.create({
    baseURL: configData.axios.baseUrl,
    headers: configData.axios.headers,
    timeout: (configData.axios.timeout * 1000)
});

export default API;