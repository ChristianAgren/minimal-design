import React from "react"
import styled from "styled-components"
import HeroBG from "../resources/hero-background.jpg"
import BigLogo from "../resources/SVG/big_logo.svg"

const HeroOverflow = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 40rem;
    background-color: ${props => props.theme && props.theme.dark};
`
    
const HeroBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 90rem;
    height: 40rem;
    background-image: url(${HeroBG});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroCall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 336px;
    height: 245px;
`

const CallLogo = styled.img`
    width: 156px;
    height: 100px;
    cursor: pointer;
`

const CallBtn = styled.button`
    width: 336px;
    height: 96px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    border: 3px solid ${props => props.theme.bright};
    padding-bottom: 6px;
    letter-spacing: 3.5px;
    cursor: pointer;
    color: ${props => props.theme.bright};
    font-size: 47.65px;
    font-family: "Alata", sans-serif;

    & > p::after {
        content: ".";
        color: ${props => props.theme.accentBlue};
    }
`

const Hero = (props) => {
    return (
        <HeroOverflow theme={props.theme}>
            <HeroBackground>
                <HeroCall>
                    <CallLogo src={BigLogo} alt="big_logo"></CallLogo>
                    <CallBtn theme={props.theme}><p>get started</p></CallBtn>
                </HeroCall>
            </HeroBackground>
        </HeroOverflow>
    )
}

export default Hero