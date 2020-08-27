import React from "react"
import styled from "styled-components"
import { Title, Subtitle } from "./text"
import ProductImage from "../resources/Product_img.png"
import ServicesImage from "../resources/Services_img.png"

const BaseSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 44rem;
`

const ProductSectionOverflow = styled(BaseSection)`
    background-color: ${props => props.theme.bright};
`

const ServiceSectionOverflow = styled(BaseSection)`
    background-color: ${props => props.theme.accentPink};
`

const Background = styled.div`
    display: flex;
    flex-wrap: ${props => props.reverse ? 'wrap-reverse' : 'wrap'};
    justify-content: space-between;

    width: 100%;
    max-width: 90rem;
    padding: 2rem;

    @media (max-width: 1344px) {
        padding: 2rem 0;
    }
`

const BaseBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 640px;
    height: 640px;
    background-color: ${props => props.bg && props.bg};
    
    @media (max-width: 1344px) {
        width: 100%
    }
`

const InfoBox = styled(BaseBox)`

`

const ImageBox = styled(BaseBox)`
    background-image: ${props => props.image && `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

const ProductServicesSection = (props) => {
    return (
        <>
            <ProductSectionOverflow theme={props.theme}>
                <Background>
                    <ImageBox 
                        bg={props.theme.accentYellow}
                        image={ProductImage}
                    >
                    </ImageBox>
                    <InfoBox>
                        <Title 
                            color={props.theme.titleDark}
                            margin="0 0 3.268rem 0"
                            >
                                Why our design?
                            </Title>
                        <Subtitle 
                            color={props.theme.dark}
                            lineHeight="1.426"
                            margin="0 0 1rem 0"
                            maxWidth="40rem"
                        >
                            Lorem ipsum dolor sit amet,
                            <br />
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et&nbsp;dolore&nbsp;magna&nbsp;aliqua.
                        </Subtitle>
                    </InfoBox>
                </Background>
            </ProductSectionOverflow>
            <ServiceSectionOverflow theme={props.theme}>
                <Background
                    reverse
                >
                    <InfoBox>
                    <Title 
                            color={props.theme.bright}
                            margin="0 0 3.268rem 0"
                            >
                                Let us help you!
                            </Title>
                        <Subtitle 
                            color={props.theme.bright}
                            lineHeight="1.426"
                            margin="0 0 1rem 0"
                            maxWidth="40rem"
                        >
                            Lorem ipsum dolor sit amet,
                            <br />
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et&nbsp;dolore&nbsp;magna&nbsp;aliqua.
                        </Subtitle>
                    </InfoBox>
                    <ImageBox 
                        bg={props.theme.bright}
                        image={ServicesImage}
                    ></ImageBox>
                </Background>
            </ServiceSectionOverflow>
        </>
    )
}

export default ProductServicesSection