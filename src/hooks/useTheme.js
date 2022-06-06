import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'


export const useTheme = () => {

//   const {color} = useContext(ThemeContext) - could have done this way too

    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    return context;

}
