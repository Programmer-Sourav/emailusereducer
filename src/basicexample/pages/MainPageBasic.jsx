import { useContext } from "react"
import { BasicContext } from "../contexts/BasicContext"
import { ACTION_TYPES_FOR_BASIC } from "../reducer/BasicReducer"

export default function MainPageBasic(){

    const { dataState, state, dispatch, categories } = useContext(BasicContext)

    const onChangeHandler = (e) =>{
        dispatch({type: ACTION_TYPES_FOR_BASIC.SELECT_CATEGORY, payload: e.target.value })
    }

    const filteredList = dataState.filter((data)=>data.category===state.selectedCategory)

    return(
        <div> 
         {
         <ul><label>Basic Reducer with input and simple checkbox: </label>
          
          {
                <select value={state.selectedCategory} onChange={onChangeHandler}>
                 {categories.map((category) => (
                 <option key={category} value={category}>
                 {category}
            </option>
          ))}
        </select>
         }
         </ul>

         
       
         }   
        </div>
    )
}