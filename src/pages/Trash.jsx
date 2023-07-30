import { useContext } from "react"
import { EmailContext } from "../context/EmailContext"
import EmailCard from "../components/EmailCard"

export default function Trash(){
  const { trash } = useContext(EmailContext)


    return(
        <div>
            {
                trash.map((trahsItem)=><EmailCard data ={trahsItem}/>)
            }
        </div>
    )
}