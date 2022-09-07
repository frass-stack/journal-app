
//Las mutations impactan el state. 
//export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {

    //Valor actual y nuevos valores de entradas
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntries = ( state ) => {

}

export const addEntries = ( state ) => {

}