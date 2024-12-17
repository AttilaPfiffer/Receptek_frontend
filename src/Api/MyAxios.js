import axios from 'axios';

export const myAxios = axios.create({
    baseUrl: "http://localhost:8000",
    timeout: 10000,
    headers: {
        'Context-type': 'application/json',
    },
    
})