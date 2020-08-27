import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: #28292D;
`

const Main = (props) => {
    return (
        <StyledMain>
            {props.children}
        </StyledMain>
    )
}

export default Main