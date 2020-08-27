import React, { useState, useLayoutEffect } from "react"
import { ResponsiveContext, sizes, devices } from "./res.context"

const ResponsiveContextProvider = (props) => {
    const [ width, setWidth ] = useState(0)

    useLayoutEffect(() => {
        const updateWidth = () => {
            if (width != window.innerWidth) {
                setWidth(window.innerWidth)
            }
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()

        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    })

    return (
        <ResponsiveContext.Provider 
        {...props}
        value={{
            sizes,
            devices,
            width
        }}
        />
    )
}

export default ResponsiveContextProvider