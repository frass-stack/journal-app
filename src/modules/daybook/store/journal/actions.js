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

export const updateEntry = async ({ commit }, entry) => {//Entry debe ser un parametro
    //Extraer solo lo que se necesita // -id
    const { text, date, picture } = entry
    const saveEntry = { text, date, picture }
    const resp = await journalApi.put(`/entries/${ entry.id }.json`, saveEntry)
    console.log( resp )
    //Commit mutation
    commit('updateEntry', {...entry})
}

export const createEntries = async ({ commit }) => {

}