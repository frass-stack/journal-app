import { useStore } from "vuex";

const useAuth = () => {

    const store = useStore()

    const createUser = async ( user ) => {
        //console.log(user)
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async ( user ) => {
        // console.log(user)
        const resp = await store.dispatch('auth/signInUser', user)
        console.log(resp)
        return resp
    }

    return{
        createUser,
        loginUser
    }
}

export default useAuth