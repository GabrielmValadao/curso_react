import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()    

// alteração de valores
export const titleColorReducer = (state, action) => {
    // switch
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {
        color: 'red'})
    // state = estado do hook atual / dispatch = a função que atualiza o estado para o novo
    // titleColorReducer = a função que vai atualizar o estado
    // {color: 'red'} = o estado inicial

    console.log('Title colot context', state)

    return (
        <TitleColorContext.Provider value={{...state}}>
            {children}
        </TitleColorContext.Provider>
    )
}