import axios from 'axios'


const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'Aca va una api key'
    }
})

export default authApi
