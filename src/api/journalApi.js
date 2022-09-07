import axios from 'axios'


const journalApi = axios.create({
    baseURL:'https://vue---demos-default-rtdb.firebaseio.com'
})

export default journalApi