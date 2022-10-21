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

    //No hace falta que logout sea async
    const logout = () => {
        store.commit('auth/logout')
        //Limpiamos las entradas
        store.commit('journal/clearEntries')
    }

    return{
        //Actions
        createUser,
        loginUser,
        checkAuthStatus,
        logout,

        //Getters
        authCheckStatus: computed( () => store.getters['auth/currentStatus'] ),
        username: computed( () => store.getters['auth/username'] )
    }
}

export default useAuth