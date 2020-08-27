import React from 'react'

export const sizes = {
    mobile: 640,
    tablet: 1024,
    desktop: 1440
}

export const devices = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`
}

export const ResponsiveContext = React.createContext(
    sizes,
    devices,
    0
)