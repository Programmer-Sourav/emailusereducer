export const initialState = {
    selectOption: [], 
    options: []

}


export const ACTION_TYPES_CHECKBOX = {
     SELECT_OPTION : "SELECT_OPTION"
}

export default function CheckboxReducer(state, action){
    switch(action.type){
        case ACTION_TYPES_CHECKBOX.SELECT_OPTION: 
        //console.log(223, action.payload, state.selectOption)
             return {...state, selectOption: state.selectOption.includes(action.payload)
                ? state.selectOption.filter((selectedItem) => selectedItem!== action.payload)
                : [...state.selectOption, action.payload]}
        default:
            return state      
    }
}