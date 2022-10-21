import axios from 'axios'


const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyBJC4dZ0OixNeWbAYugZqGUpcCfkxH0vUM'
    }
})

export default authApi