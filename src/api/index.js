import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://myway.smartsolutionsapps.ru',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const setNumber = async (number) =>
    await Axios.post('api/v1/auth/authorize/verified', JSON.stringify({ phone_number: number}))

export const setCode = async (data) =>
    await Axios.post('api/v1/auth/token', data)
