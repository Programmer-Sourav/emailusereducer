import { createContext, useEffect, useReducer } from "react";
import DataReducer, { ACTION_TYPES_FOR_EXAMPLE_RADIO, initialState } from "../reducer/DataReducer";

export const DataContext = createContext()


export function DataProvider({children}){

    const [state, dispatch] = useReducer(DataReducer, initialState)

    const options = [
        { id: 1, text: 'Red' },
      { id: 2, text: 'Blue' },
      { id: 3, text: 'Green' },
    ]

    useEffect(()=>{
        dispatch({type: ACTION_TYPES_FOR_EXAMPLE_RADIO.INITIALIZE, payload: options})
    },[])

    return(
        <DataContext.Provider value={{options: state.options, state, dispatch}}>{children}</DataContext.Provider>
    )
}