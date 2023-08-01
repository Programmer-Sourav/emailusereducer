export const initialState = {
    selectedOption: "", 
    initialData: []
}


export const ACTION_TYPES_FOR_SELECT = {
    SELECTED_OPTION : "SELECTED_OPTION", 
}

export default function SelectReducer(state, action){
    switch(action.type){
        case ACTION_TYPES_FOR_SELECT.SELECTED_OPTION: 
        return {...state, selectedOption:{} }
        default: 
        return state
    }

}