export const intitialState = {
    inbox: [],
    spam: [],
    trash: []
}

export const ACTION_TYPES = {
    STAR_UNSTAR : "STAR_UNSTAR",
    DELETE: "DELETE",
    REPORT: "REPORT", 
    READ_UNREAD: "READ_UNREAD", 
    INITIZLIZE: "INITIALIZE"
}

export default function EmailReducer(state, action) {
   switch(action.type){
    case ACTION_TYPES.DELETE: 
    return {...state, inbox:  state.inbox.filter((stateItem)=>stateItem.mId!== action.payload.mId), 
                trash: [...state.trash, action.payload]}
    case ACTION_TYPES.REPORT: 
    return {...state, inbox: state.inbox.filter((stateItem)=>stateItem.mId!==action.payload.mId), 
                      spam:  [...state.spam, action.payload]}
    case ACTION_TYPES.STAR_UNSTAR: 
    console.log(state, state.inbox, action.payload)
    return {...state, inbox: state.inbox.map((stateItem)=>stateItem.mId===action.payload ? {...stateItem, isStarred : !stateItem.isStarred} : stateItem)}
    case ACTION_TYPES.READ_UNREAD: 
    console.log(state, state.inbox, action.payload)
    return {...state, inbox: state.inbox.map((stateItem)=>stateItem.mId===action.payload? {...stateItem, unread: !stateItem.unread} : stateItem)}
    case ACTION_TYPES.INITIZLIZE: 
    return {...state, inbox: action.payload}
   }
} 