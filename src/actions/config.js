import axios from 'axios';

export const SERVER_URL = 'http://localhost:8001/';
export const API_URL = SERVER_URL + 'api/';
export const SECRET = 'a08f08bac39aeae6c9580ade7aa8387b5a0e7428';

export const request = axios.create({
    baseURL: API_URL,
    withCredentials: true
});