import journalApi from "@/api/journalApi"

//Son asincronas, que llegan al backend 
//export const myAction = async ({ commit }) => {


// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    console.log(data)
}

export const updateEntries = async ({ commit }) => {

}

export const createEntries = async ({ commit }) => {

}