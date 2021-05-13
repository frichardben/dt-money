import axios from 'axios';

const locationURL = window.location.origin
export const api = axios.create({
    //baseURL: 'http://localhost:3000/api'
    baseURL: `${locationURL}/api`
})