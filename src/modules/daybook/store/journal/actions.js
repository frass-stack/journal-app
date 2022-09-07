import journalApi from "@/api/journalApi"

//Son asincronas, que llegan al backend 
//export const myAction = async ({ commit }) => {


// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    //console.log(data)
    //Firebase nos esta devolviendo un objeto y lo transformamos en un array.
    const entries = []
    for( let id of Object.keys( data ) ){
        entries.push({
            id,
            ...data[id]
        })
    }
    //console.log(entries)

    //Llamamos la mutation
    commit('setEntries', entries)
}

export const updateEntries = async ({ commit }) => {

}

export const createEntries = async ({ commit }) => {

}