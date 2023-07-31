import { useContext, useState } from "react"
import { EmailContext } from "../context/EmailContext"
import EmailCard from "../components/EmailCard"
import { ACTION_TYPES } from "../reducer/EmailReducer"

export default function Home(){

    const { inboxState, allMails, dispatch, state } = useContext(EmailContext)

    const readCount = inboxState.reduce((acc, currentInboxItem)=>(acc+!currentInboxItem.unread),0)
  


    const handleStarredEmailChange = (event) =>{
          
           dispatch({type: ACTION_TYPES.SHOW_STARRED, payload: event.target.checked})

    }

    const handleUnreadEmailChange = (event) =>{
         
            dispatch({type: ACTION_TYPES.SHOW_UNREAD, payload: event.target.checked})
           
    }

    let filteredList = state.isStarChecked ? inboxState.filter((stateItem)=>stateItem.isStarred) : allMails &&
    state.isUnreadChecked ? inboxState.filter((stateItem)=>stateItem.unread) : allMails
   
    return(
        <div>
          
         <p> <label>
          <input type="checkbox" checked={state.isUnreadChecked} onChange={handleUnreadEmailChange}/>
          Show unread mails
          </label> </p>
          <label>
          <input type="checkbox" checked={state.isStarChecked} onChange={handleStarredEmailChange}/>
          Show starred mails
          </label>
          <h1>Unread Emails : {inboxState.length-readCount}</h1> 
          {
            filteredList.map((mail)=>(
               <li key={mail.mId}> <EmailCard data={mail}/> </li>
            ))
          }
        </div>
    )
}