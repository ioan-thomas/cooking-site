import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, {payload, type}) => {
    switch (type){
        case "CHANGE_COLOR":
            return { ...state, color: payload}
        case "CHANGE_MODE":
            return {...state, mode: payload}
        default:
            return state
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })

    const changeColor = color => {
        dispatch({type: "CHANGE_COLOR", payload: color})
    }

    const changeMode = mode => {
        dispatch({type: "CHANGE_MODE", payload: mode})
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
