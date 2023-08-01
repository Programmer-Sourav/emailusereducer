import { useContext } from "react"
import { SelectContext } from "../contexts/SelectContext"
import { ACTION_TYPES_FOR_EXAMPLE_RADIO } from "../../radiobuttonexample/reducer/DataReducer"
import { ACTION_TYPES_FOR_SELECT } from "../reducer/SelectReducer"

export default function SelectMain(){

     const { dataState, state, dispatch } = useContext(SelectContext)

    const handleChange = (e) =>{
        dispatch({type: ACTION_TYPES_FOR_SELECT.SELECTED_OPTION, payload: e.target.value})
    }

    const filteredList = dataState.filter((data)=>data.category===state.selectedOption)
   
    return(
        <div>
            {
                <ul>
                <select value={state.selectedOption} onChange={(e)=>{handleChange(e)}}>
                    <option value="Select">Select</option>
                     <option value="Category A">Category A</option>
                     <option value="Category B">Category B</option>
                     <option value="Category C">Category C</option>
                </select>

                {
                    filteredList.map((item)=>(
                        <p>{item.text}</p>
                    ))
                }
                </ul>
            }
        </div>
    )
}