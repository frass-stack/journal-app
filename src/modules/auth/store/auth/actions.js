import authApi from "@/api/authApi"

export const createUser = async ({ commit }, user) => {
    const { name, email, password } = user

    try {
        const { data } = await authApi.post(':signUp',{ email, password, returnSecureToken:true })
        // console.log(data)
        const { idToken, refreshToken } = data
        
        await authApi.post(':update',{ displayName: name, idToken, refreshToken })
        // console.log(resp)

        //Como el password no esta encriptado sera visible su lectura, por lo tanto no lo necesito en este punto.
        delete user.password 
        commit('loginUser', { user, idToken, refreshToken })
        return {ok:true}

    } catch (error) {
        return {ok:false, message:error.response.data.error.message}
    }
}

export const signInUser = async ({ commit }, user) => {
    const { email, password } = user

    try {
        const { data } = await authApi.post(':signInWithPassword',{ email, password, returnSecureToken:true })
        const { displayName, idToken, refreshToken } = data

        //Grabamos el nombre desde el displayName
        user.name = displayName

        commit('loginUser', { user, idToken, refreshToken })

        return {ok:true}

    } catch (error) {
        return {ok:false, message:error.response.data.error.message}
    }
}

export const checkAuthentication = async ({commit}) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    //Si no existe el idToken, reseteamos el state y salimos.
    if(!idToken){
        commit('logout')
        return {ok:false, message:'No hay token'}
    }

    try {
        //Leemos el idToken para verificar que user es, debiendo ser el primero el que es de nuestro interes.
        const { data } = await authApi.post(':lookup', { idToken })
        console.log(data)
        const { displayName:name, email } = data.users[0]

        //Creamos la data para enviarla al mutation loginUser y reestablecer el store.state.
        const user = {
            name,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return {ok:true}
        
    } catch (error) {
        commit('logout')
        return {ok:false, message:error.response.data.error.message}
    }
}