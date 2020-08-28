import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../contexts/theme.context"
import FooterImg from "../resources/footer-background.png"
import Logotype from "../components/footer.logotype"
import { Subtitle } from "../components/text"
import Menu from "../components/menu"
import MenuItem from "../components/menu-item"

const FooterOverflow = styled.div`
    display: flex;
    justify-content: center;

    height: 5rem;
    min-height: 60rem;
    width: 100%;

    background-color: ${props => props.theme.dark};
    border-top: 2rem solid ${props => props.theme.accentYellow};
`

const FooterBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: relative;

    width: 100%;
    max-width: 90rem;
    height: 100%;
    background-image: url(${FooterImg});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
`

const CopySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30rem;

    & > p {
        color: ${props => props.color};
        font-size: 18.2px;
        line-height: 1.2;
    };
`

const NavigationSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    min-height: 30rem;
    padding: 0 2.5rem;

    max-width: 64rem;
    width: 100%;

    & h3 {
        text-align: left;
        color: ${props => props.theme.bright};
        margin-bottom: 2rem;
    }

    & li {
        color: ${props => props.theme.bright};
    }

    @media (max-width: 898px) {
        margin-top: 7.5rem;
    }
`

const BaseNavItems = styled(Menu)`
    width: 241px;
    height: 175px;
    margin: 0 1rem;
`

const Documentation = styled(BaseNavItems)`
`

const Contact = styled(BaseNavItems)`
`

const Community = styled(BaseNavItems)`
`

const NavMenuItem = styled(MenuItem)`
    padding: .5rem 0;
`

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <FooterOverflow theme={theme}>
            <FooterBackground>
                <NavigationSection theme={theme}>
                    <Documentation>
                        <Subtitle>Documentation</Subtitle>
                        <NavMenuItem>Get started</NavMenuItem>
                        <NavMenuItem>Components</NavMenuItem>
                        <NavMenuItem>Services</NavMenuItem>
                    </Documentation>
                    <Contact>
                        <Subtitle>Contact</Subtitle>
                        <NavMenuItem>Work for us</NavMenuItem>
                        <NavMenuItem>Inquiries</NavMenuItem>
                        <NavMenuItem>Support</NavMenuItem>
                    </Contact>
                    <Community>
                        <Subtitle>Community</Subtitle>
                        <NavMenuItem>Github</NavMenuItem>
                        <NavMenuItem>Socials</NavMenuItem>
                        <NavMenuItem>Blog</NavMenuItem>
                    </Community>
                </NavigationSection>
                <CopySection color={theme.bright}>
                    <Logotype />
                    <p>Copyright © 2020 minimal designs</p>
                </CopySection>
            </FooterBackground>
        </FooterOverflow>
    )
}

export default Footer