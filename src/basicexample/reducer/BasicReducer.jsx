export const initialState = {
    initialData: [],
    selectedCategory: ""
}

export const ACTION_TYPES_FOR_BASIC = {
  SELECT_CATEGORY: "SELECT_CATEGORY", 
  MARK_COMPLETE: "MARK_COMPLETE"
}

export default function BasicReducer(state, action){
    switch(action.type){
        case ACTION_TYPES_FOR_BASIC.SELECT_CATEGORY: 
        return {...state, initialData : action.payload}

        case ACTION_TYPES_FOR_BASIC.MARK_COMPLETE: 
        return {...state, initialData : state.initialData.map((stateItem)=>stateItem)}
    }
}