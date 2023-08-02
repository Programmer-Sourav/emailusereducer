import { createContext, useReducer } from "react";
import BasicReducer, { initialState } from "../reducer/BasicReducer";

export const BasicContext = createContext()

export function BasicProvider({children}){

    
    const data = [
        { id: 1, category: 'Category A', name: 'Item 1', quantity: 2, completed: false },
        { id: 2, category: 'Category B', name: 'Item 2', quantity: 1, completed: true },
        { id: 3, category: 'Category A', name: 'Item 3', quantity: 3, completed: true },
        { id: 4, category: 'Category C', name: 'Item 3', quantity: 2, completed: true },
        { id: 5, category: 'Category C', name: 'Item 3', quantity: 4, completed: false },
      ];
      const categories = ['All', 'Category A', 'Category B', 'Category C']; 

  const [state, dispatch ] = useReducer(BasicReducer, initialState)
  state.initialData = data

    return(
        <BasicContext.Provider value={{dataState: state.initialData, state, dispatch, categories}}>{children}</BasicContext.Provider>
    )
}