import React from "react"
import styled from "styled-components"
import Logo from "../resources/SVG/logotype_bright.svg"

const Logotype = () => {
    return (
        <LogotypeImg src={Logo} alt="minimal_logotype" />
    )
}

const LogotypeImg = styled.img`
    width: 152px;
    height: 38px;
    padding: 0px 18px;
    cursor: pointer;
`

export default Logotype