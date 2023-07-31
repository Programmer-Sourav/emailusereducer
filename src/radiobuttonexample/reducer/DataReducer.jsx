export const initialState = {
    selectedOption: "", 
    options: []
}


export const ACTION_TYPES_FOR_EXAMPLE_RADIO = {
    SELECTED_OPTION: "SELECTED_OPTION", 
    INITIALIZE: "INITIALIZE"
}

export default function DataReducer(state, action){

    switch(action.type){
        case ACTION_TYPES_FOR_EXAMPLE_RADIO.SELECTED_OPTION:
            return { ...state, selectedOption: action.payload}
        case ACTION_TYPES_FOR_EXAMPLE_RADIO.INITIALIZE: 
            return {...state, options: action.payload}    
        default: 
            return state    
        }

}