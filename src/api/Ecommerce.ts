import axios from "axios";

const ecommerce = axios.create({
    baseURL: 'https://store.innovacode.online/api',
})

export default ecommerce;