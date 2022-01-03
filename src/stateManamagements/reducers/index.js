const initialState =  {
    novels: [],
    lstReading:[],
    lstReading4:[],
}


function rootReducers(state = initialState, action){
    if(action.type === 'GET_ALL_LIST'){
        state.novels = action.payload
        console.log("GET ALL LIST",state)
        
    }else if (action.type  === 'ADD_READING'){
        state.lstReading.push(action.payload)
        console.log("lstReading1",state)

    } else if (action.type === 'ADD_READING_2'){
        state.lstReading4.push(action.payload)
        console.log("lstReading4",state)
    }
    return state
}

console.log("initialState:",initialState.lstReading)

export default rootReducers;