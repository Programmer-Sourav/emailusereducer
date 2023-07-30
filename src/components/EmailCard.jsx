import { useContext } from "react"
import { EmailContext } from "../context/EmailContext"
import { ACTION_TYPES } from "../reducer/EmailReducer"
import { Link } from "react-router-dom"

export default function EmailCard({data}){


    const { dispatch, inboxState } = useContext(EmailContext)


    const deleteEmail = (mId) =>{
       dispatch({type:ACTION_TYPES.DELETE , payload: mId})
    }

    const markAsUnread = (mId) =>{
        dispatch({type: ACTION_TYPES.READ_UNREAD, payload: mId})
    }

    const reportSpam = (emailItem) =>{
         dispatch({type: ACTION_TYPES.REPORT, payload: emailItem})
    }

    const starEmail = (mId) =>{
         dispatch({type: ACTION_TYPES.STAR_UNSTAR, payload: mId})
    }

    return(
        <div className="emailcard">
         <h2>Subject: {data.subject}</h2>
         <p>{data.content}</p>
         <div>
            <button onClick={()=>{deleteEmail(data)}}>Delete</button>
            <button onClick={()=>{markAsUnread(data.mId)}}>Mark as Unread</button>
            <button onClick={()=>{reportSpam(data)}}>Report Spam</button>
            <button> <Link to={`/details/${data.mId}`}>View Details</Link></button>
            <button onClick={()=>{starEmail(data.mId)}}>Star </button>
         </div>
        </div>
    )
}