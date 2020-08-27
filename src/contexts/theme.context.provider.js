import React from "react"
import { ThemeContext, theme, textSizes } from "./theme.context"

const ThemeContextProvider = (props) => {
    return (
       <ThemeContext.Provider 
        {...props}
        value={{
            theme,
            textSizes
        }}
       /> 
    )
}

export default ThemeContextProvider