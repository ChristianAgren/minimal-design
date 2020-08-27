import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
    height: 5rem;
    width: 100%;
    background-color: #4a4b58;
`

const Footer = (props) => {
    return (
        <StyledFooter>
            { props.children }
        </StyledFooter>
    )
}

export default Footer