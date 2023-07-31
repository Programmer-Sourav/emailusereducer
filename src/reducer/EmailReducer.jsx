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
    INITIZLIZE: "INITIALIZE", 
    SHOW_UNREAD: "SHOW_UNREAD", 
    SHOW_STARRED: "SHOW_STARRED"
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
    console.log(state, state.inbox, action.payload, action.payload.match(/\d+/)[0])
    return {...state, inbox: [...state.inbox].map((stateItem)=>stateItem.mId.match(/\d+/)[0]===action.payload.match(/\d+/)[0] ? {...stateItem, isStarred : !stateItem.isStarred} : stateItem)}
    case ACTION_TYPES.READ_UNREAD: 
    console.log(state, state.inbox, action.payload)
    return {...state, inbox: state.inbox.map((stateItem)=>stateItem.mId.toString()===action.payload.toString()? {...stateItem, unread: !stateItem.unread} : stateItem)}
    case ACTION_TYPES.INITIZLIZE: 
    return {...state, inbox: action.payload}
    case ACTION_TYPES.SHOW_UNREAD:
    return{...state, inbox: state.inbox.filter((stateItem)=>stateItem.unread)}
    case ACTION_TYPES.SHOW_STARRED: 
    return {...state, inbox: state.inbox.filter((stateItem)=>stateItem.isStarred)}    
    default:
    return state
   }
} 