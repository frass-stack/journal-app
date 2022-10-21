import { computed } from "vue";
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

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    return{
        //Actions
        createUser,
        loginUser,
        checkAuthStatus,

        //Getters
        authCheckStatus: computed( () => store.getters['auth/currentStatus'] )
    }
}

export default useAuth