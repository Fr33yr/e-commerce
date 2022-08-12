import axios from 'axios'

const API_URL= "https://floating-lowlands-72186.herokuapp.com/api/products"

export const getData = async () => {
    try{
        const response = await axios.get(API_URL)
        const {data} = response
        return data
    }catch(err){
        console.log(err);
    }
}