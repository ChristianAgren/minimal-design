import styled from 'styled-components'

const Title = styled.h1`
    font-family: 'Alata', sans-serif;
    font-size: ${props => props.size && props.size};
    color: ${props => props.color && props.color};
`

export default Title