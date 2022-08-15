import axios from 'axios'

const API_URL= "https://floating-lowlands-72186.herokuapp.com/api/products"

export const getData = () => {
    return axios.get(API_URL)
        .then(res => res.data)
}