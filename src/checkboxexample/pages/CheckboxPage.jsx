import { useContext } from "react"
import { CheckBoxContext } from "../contexts/CheckBoxContext"
import { ACTION_TYPES_CHECKBOX } from "../reducer/CheckboxReducer"

export default function CheckboxPage(){

    const { optionsData, selectedValue, dispatch } = useContext(CheckBoxContext)

    const onChangeHandler = (checkedText) =>{
       dispatch({type: ACTION_TYPES_CHECKBOX.SELECT_OPTION, payload: checkedText})
    }


    return(
        <div> 
            {
               optionsData.map((option)=>
               <li key={option.id}>
                <label>
                <input type="checkbox" checked={selectedValue.includes(option.text)} onChange={()=>{onChangeHandler(option.text)}}/> {option.text}
                </label></li>)
            }
        </div>
    )
}