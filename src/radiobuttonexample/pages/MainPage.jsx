// "What is your favorite color?". The user can select one of the provided options: "Red," "Blue," or "Green." 

import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { ACTION_TYPES_FOR_EXAMPLE_RADIO } from "../reducer/DataReducer"


export default function MainPage(){

    const { options, state, dispatch } = useContext(DataContext)

    const onChangeHandler = (optionText) =>{
       dispatch({type: ACTION_TYPES_FOR_EXAMPLE_RADIO.SELECTED_OPTION, payload: optionText})
    }

    return(
        <div>
            <p><strong>What is your favourite color?</strong></p>
            <ul>
            {
               
                options.map((stateItem)=>(
                    <li key={stateItem.id}>
                     <label> 
                     <input type="radio"  checked={state.selectedOption === stateItem.text} onChange={()=>{onChangeHandler(stateItem.text)}}/>
                     {stateItem.text}
                     </label> 
                    </li>
                ))
              
            }
            </ul>
           
            
            <p>Selected Option: {state.selectedOption}</p>
            </div>
    )
}