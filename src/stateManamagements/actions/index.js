export function getAllNovels(payload){
    return {type: 'GET_ALL_LIST',payload}
}


export function addNovelReading(data) {
    return { type: 'ADD_READING', payload: data}
}

export function addNovelReading2(data) {
    return { type: 'ADD_READING_2', payload: data}
}