import React from "react";
import styled from "styled-components";
import { Title, Subtitle } from "./text";

const WelcomeOverflow = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 384px;
  background-color: ${(props) => props.theme.accentBlue};
  border-bottom: 32px solid ${(props) => props.theme.accentYellow};
`;

const WelcomeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 90rem;
  padding: 0 2rem;

  background-color: ${(props) => props.theme.accentBlue};
`;

const Textwrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 212.61px;
`

const WelcomeSection = (props) => {
    return (
        <WelcomeOverflow theme={props.theme}>
            <WelcomeBackground theme={props.theme}>
                <Textwrapper>
                <Title 
                    color={props.theme.bright}
                    margin="0 0 3.268rem 0"
                >
                    Welcome to our design!
                </Title>
                    <div>
                        <Subtitle
                            color={props.theme.bright}
                            maxWidth="50rem"
                        >
                            If you haven't gone straight for our documentation you might not
                            know&nbsp;what&nbsp;we're&nbsp;about...
                            <br/>
                            Find out by scrolling down!
                        </Subtitle>
                    </div>
                </Textwrapper>
            </WelcomeBackground>
        </WelcomeOverflow>
    );
};

export default WelcomeSection;
