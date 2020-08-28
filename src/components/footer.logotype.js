import React from "react"
import styled from "styled-components"
import Logo from "../resources/SVG/logotype_bright.svg"

const Logotype = () => {
    return (
        <LogotypeImg src={Logo} alt="minimal_logotype" />
    )
}

const LogotypeImg = styled.img`
    width: 220px;
    height: 55px;
    cursor: pointer;

    margin-bottom: 4rem;

    @media (max-width: 898px) {
        margin-top: 4rem;
    }
`

export default Logotype