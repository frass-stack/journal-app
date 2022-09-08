
//Las mutations impactan el state. 
//export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {

    //Valor actual y nuevos valores de entradas
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => {
    //State.entries => arrreglo
    const idx = state.entries.map(entry => entry.id).indexOf(entry.id)
    console.log(idx)
    //State.entries = ...entry
    state.entries[idx] = entry
}

export const addEntries = ( state ) => {

}