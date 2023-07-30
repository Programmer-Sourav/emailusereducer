import { createContext, useEffect, useReducer } from "react";
import EmailReducer, { ACTION_TYPES, intitialState } from "../reducer/EmailReducer";
import { mails } from "../data/api";


export const EmailContext = createContext()


export function EmailProvider({children}){

    const [state, dispatch] = useReducer(EmailReducer, intitialState)

    useEffect(()=>{
        dispatch({type: ACTION_TYPES.INITIZLIZE, payload: mails})
    },[])
    

    return(
        <EmailContext.Provider value={{inboxState: state.inbox, trash: state.trash, spam: state.spam, dispatch}}>{children}</EmailContext.Provider>
    )
}