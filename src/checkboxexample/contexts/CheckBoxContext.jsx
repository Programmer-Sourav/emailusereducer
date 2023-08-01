import { useReducer } from "react";
import { createContext } from "react";
import CheckboxReducer, { initialState } from "../reducer/CheckboxReducer";

export const CheckBoxContext = createContext()


export function CheckboxProvider({children}){

    const optionsArray = [
        { id: 1, text: 'Apple' },
        { id: 2, text: 'Dragon Fruit' },
        { id: 3, text: 'Orange' },
      ]

      const [state, dispatch] = useReducer(CheckboxReducer, initialState)
      state.options = optionsArray
      console.log(123, state.options)

    return(
        <CheckBoxContext.Provider value={{state, dispatch, optionsData: state.options, selectedValue: state.selectOption, dispatch}}>{children}</CheckBoxContext.Provider>
    )
}