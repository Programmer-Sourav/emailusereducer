import { useContext } from "react"
import { EmailContext } from "../context/EmailContext"
import EmailCard from "../components/EmailCard"

export default function Spam(){

    const { spam } = useContext(EmailContext)


    return(
        <div>{
            spam.map((spamItem)=><EmailCard data= {spamItem}/>)
            
            }</div>
    )
}