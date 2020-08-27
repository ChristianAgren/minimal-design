import React from 'react'

export const theme = {
    dark: "#4a4b58",
    bright: "#f9fdff",
    accentPink: "#ee75ab",
    accentYellow: "#f5d284",
    accentBlue: "#7fccdd",
    titleDark: "#28292d"
}

export const textSizes = {
    large: "63.54px",
    medium: "39.26px",
    small: "24.27px",
}

export const ThemeContext = React.createContext(
    theme,
    textSizes
)