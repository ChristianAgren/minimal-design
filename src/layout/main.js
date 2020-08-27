import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/theme.context'
import Hero from '../components/main.hero'
import WelcomeSection from '../components/main.welcome'
import ProductServicesSection from '../components/main.products-and-services'

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    width: 100%;

    background-color: #28292D;
`

const Main = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <StyledMain>
            <Hero theme={theme} />
            <WelcomeSection theme={theme} />
            <ProductServicesSection theme={theme} />
            {/* <ContactSection theme={theme} /> */}
        </StyledMain>
    )
}

export default Main