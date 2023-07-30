import { useContext } from "react"
import { EmailContext } from "../context/EmailContext"
import EmailCard from "../components/EmailCard"

export default function Home(){

    const { inboxState } = useContext(EmailContext)

    return(
        <div> 
          {
            inboxState.map((mail)=>(
                <EmailCard data={mail}/>
            ))
          }
        </div>
    )
}