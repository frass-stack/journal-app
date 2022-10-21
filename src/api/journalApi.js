import axios from 'axios'


const journalApi = axios.create({
    baseURL:'https://vue---demos-default-rtdb.firebaseio.com'
})

//Cada vez que el token se actualiza toma la ultima version del mismo
journalApi.interceptors.request.use( (config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default journalApi