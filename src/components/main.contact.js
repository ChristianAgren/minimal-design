import React from 'react'
import styled from 'styled-components'
import { Title, Subtitle } from './text'
import Menu from './menu'
import MenuItem from './menu-item'

import Charles from '../resources/charles-ingvar.png'
import Ragnar from '../resources/ragnar.png'
import Rocky from '../resources/rocky.png'
import Harry from '../resources/harry.png'
import Doris from '../resources/doris.png'

const ContactOverflow = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.bright};
    border-top: 32px solid ${props => props.theme.accentYellow};
    padding-bottom: 4rem;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    width: 100%;
    max-width: 90rem;
    height: 100%;
    background-color: ${props => props.theme.bright};
`
const Stickybar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 4rem;

    width: 100%;
    height: 5rem;
    background-color: rgba(249, 253, 255, .88);
    backdrop-filter: blur(3px);

    & > h1::after {
        content: ".";
        color: ${props => props.theme.accentBlue};
    };
`

const ContactMenu = styled(Menu)`
    max-width: 64rem;
    width: calc(100% - 3rem);
`

const ContactItem = styled(MenuItem)`
    display: flex;
    flex-direction: ${props => props.reverse && "row-reverse"};
    align-items: center;
    justify-content: flex-start;

    padding-bottom: 0;
    height: 10rem;

    font-family: 'Open sans', sans-serif;
    
    & p {
        text-align ${props => props.reverse ? "right" : "left"};
    }

    & h3 {
        text-align: ${props => props.reverse ? "right" : "left"};
    }

`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: calc(100% - 7.25rem);
    max-width: 49rem;
    height: calc(100% - 3rem);
    background-color: ${props => props.theme.accentYellow};
    margin: 1.5rem 0;

    & > p {
        font-size: 18px;
        line-height: 1.2;
        margin: 0 20px;
        width: calc(100% - 40px);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    @media (min-width: 800px) {
        width: calc(100% - 9.75rem);
        margin: 1.5rem 1rem;
    };
`

const ContactImage = styled.div`
    width: 6.25rem;
    min-width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.accentBlue};
    margin: 0 .5rem;

    background-image: url(${props => props.image});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 800px) {
        margin: 0 1rem;
    }
`

const Name = styled(Subtitle)`
    padding: 0 20px .7rem 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ContactSection = (props) => {
    return (
        <ContactOverflow theme={props.theme}>
            <ContactContainer theme={props.theme}>
                <Stickybar
                    theme={props.theme}
                >
                    <Title
                        color={props.theme.titleDark}
                    >
                        Our team
                    </Title>
                </Stickybar>
                <ContactMenu
                    vertical
                >
                    <ContactItem>
                        <ContactImage 
                            image={Charles}
                            theme={props.theme} 
                        />
                        <ContactInfo theme={props.theme}>
                            <Name color={props.theme.titleDark}>Charles-Ingvar Jönsson</Name>
                            <p>Den smarta och välplanerade ledaren för ligan.</p>
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem reverse>
                        <ContactImage 
                            image={Ragnar}
                            theme={props.theme} 
                        />
                        <ContactInfo theme={props.theme}>
                            <Name color={props.theme.titleDark}>Ragnar Vanheden</Name>
                            <p>Före detta bilförsäljare klädd i en några nummer för liten kostym.</p>
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <ContactImage 
                            image={Rocky}
                            theme={props.theme} 
                        />
                        <ContactInfo theme={props.theme}>
                            <Name color={props.theme.titleDark}>Rocky Blom</Name>
                            <p>Finlandssvensk klumpig bov med stor kärlek till sötsaker.</p>
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem reverse>
                        <ContactImage 
                            image={Harry}
                            theme={props.theme} 
                        />
                        <ContactInfo theme={props.theme}>
                            <Name color={props.theme.titleDark}>Harry Kruth</Name>
                            <p>Vanhedens kusin. Han är galen i öl och dynamit.</p>
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <ContactImage 
                            image={Doris}
                            theme={props.theme} 
                        />
                        <ContactInfo theme={props.theme}>
                            <Name color={props.theme.titleDark}>Doris</Name>
                            <p>Harrys flickvän, sedermera fru och ofta en inofficiell "extramedlem".</p>
                        </ContactInfo>
                    </ContactItem>
                </ContactMenu>
            </ContactContainer>
        </ContactOverflow>
    )
}

export default ContactSection