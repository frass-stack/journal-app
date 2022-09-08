import journalApi from "@/api/journalApi"

//Son asincronas, que llegan al backend 
//export const myAction = async ({ commit }) => {


// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')

    if( !data ){
        commit('setEntries', [])
        return
    }

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
    //console.log( resp )
    //Commit mutation
    commit('updateEntry', {...entry})
}

export const createEntry = async ({ commit }, entry) => {
    //dataToSave
    const { text, date, picture } = entry
    const dataToSave = { text, date, picture }
    const { data } = await journalApi.post(`/entries.json`, dataToSave)
    //data = { 'name': 'kakaka' } - guardamos la id que se genera en la dataToSave
    dataToSave.id = data.name
    //commit-> addEntry
    commit('addEntry', dataToSave)
    return data.name 
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${ id }.json`)
    commit('deleteEntryById', id)
    return id
}