import  Axios from 'axios'
require('dotenv').config()
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;


export class UserNode {
    registration = (userDetails ) => {
        return Axios.post('/registration', userDetails)
    }
}
