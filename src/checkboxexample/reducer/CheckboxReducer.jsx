export const initialState = {
    selectOption: []

}


export const ACTION_TYPES_CHECKBOX = {
     SELECT_OPTION : "SELECT_OPTION"
}

export default function CheckboxReducer(state, action){
    switch(action.type){
        case ACTION_TYPES_CHECKBOX.SELECT_OPTION: 
             return {...state, selectOption: []}
    }
}