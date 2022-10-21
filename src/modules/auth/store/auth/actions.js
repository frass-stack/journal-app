import authApi from "@/api/authApi"

export const createUser = async ({ commit }, user) => {
    const { name, email, password } = user

    try {
        const { data } = await authApi.post(':signUp',{ email, password, returnSecureToken:true })
        // console.log(data)
        const { idToken, refreshToken } = data
        const resp = await authApi.post(':update',{ displayName: name, idToken })
        // console.log(resp)

        //Como el password no esta encriptado sera visible su lectura, por lo tanto no lo necesito en este punto.
        delete user.password 
        commit('loginUser', { user, idToken, refreshToken })
        return {ok:true}

    } catch (error) {
        return {ok:false, message:error.response.data.error.message}
    }
}