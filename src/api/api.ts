import axios from 'axios'

const API_URL= "https://floating-lowlands-72186.herokuapp.com/api/products"

const getData = () => {
    return axios.get(API_URL)
        .then(res => res.data)
}

const searchByName = (name: string) => {
    return axios.get(`https://floating-lowlands-72186.herokuapp.com/api/products?search=${name}`)
        .then(res => res.data)
}

export {getData, searchByName}