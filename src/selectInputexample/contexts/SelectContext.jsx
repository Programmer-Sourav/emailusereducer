import { createContext, useReducer } from "react"
import DataReducer from "../../radiobuttonexample/reducer/DataReducer"
import { initialState } from "../reducer/SelectReducer"

export const SelectContext = createContext()


export function SelectProvider({children}){
   const [state, dispatch] = useReducer(DataReducer, initialState)

   const data =  [
    { id: 1, text: 'Item 1', category: 'Category A' },
    { id: 2, text: 'Item 2', category: 'Category B' },
    { id: 3, text: 'Item 3', category: 'Category A' },
    { id: 4, text: 'Item 4', category: 'Category C' },
  ]
   state.initialData = data

    return(
      <SelectContext.Provider value={{dataState: state.initialData}}>{children}</SelectContext.Provider>
    )
}