import { useContext, useState } from "react"
import { EmailContext } from "../context/EmailContext"
import EmailCard from "../components/EmailCard"
import { ACTION_TYPES } from "../reducer/EmailReducer"

export default function Home(){

    const { inboxState, dispatch } = useContext(EmailContext)

    const readCount = inboxState.reduce((acc, currentInboxItem)=>(acc+!currentInboxItem.unread),0)
    const [isStarChecked, setIsStarChecked] = useState(false)
    const [isUnreadChecked, setIsUnreadChecked] = useState(false)


    const handleStarredEmailChange = (event) =>{
           setIsStarChecked(event.target.checked)
           console.log(isStarChecked)
           dispatch({type: ACTION_TYPES.SHOW_STARRED, payload: event.target.checked})
    }

    const handleUnreadEmailChange = (event) =>{
           setIsUnreadChecked(event.target.checked)
           console.log(isUnreadChecked)
            dispatch({type: ACTION_TYPES.SHOW_UNREAD, payload: event.target.checked})
           
    }
   
    return(
        <div>
         <p> <label>
          <input type="checkbox" checked={isUnreadChecked} onChange={handleUnreadEmailChange}/>
          Show unread mails
          </label> </p>
          <label>
          <input type="checkbox" checked={isStarChecked} onChange={handleStarredEmailChange}/>
          Show starred mails
          </label>
          <h1>Unread Emails : {inboxState.length-readCount}</h1> 
          {
            inboxState.map((mail)=>(
                <EmailCard data={mail}/>
            ))
          }
        </div>
    )
}