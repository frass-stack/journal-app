import { useStore } from "vuex";

const useAuth = () => {

    const store = useStore()

    const createUser = async ( user ) => {
        console.log(user)
        //TODO: store.dispatch('auth/createuser', user)
        //return resp
    }

    return{
        createUser
    }
}

export default useAuth