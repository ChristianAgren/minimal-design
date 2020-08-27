import styled from 'styled-components'

export const Title = styled.h1`
    font-family: 'Alata', sans-serif;
    font-weight: 300;
    font-size: 47.65px;

    line-height: 1.2;
    letter-spacing: 2px;

    text-align: center;
    color: ${props => props.color && props.color};

    margin: ${props => props.margin && props.margin};
`

export const Subtitle = styled.h3`
    font-family: 'Alata', sans-serif;
    font-size: 29.45px;
    font-weight: 400;
    
    line-height: ${props => props.lineHeight ? props.lineHeight : '1.226'};
    letter-spacing: 2px;
    
    text-align: center;
    color: ${props => props.color && props.color};
    
    max-width: ${props => props.maxWidth && props.maxWidth};
    margin: ${props => props.margin && props.margin};
`