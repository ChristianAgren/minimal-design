import styled, { css } from 'styled-components'

const horizontal = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & > li {
        padding: 6px 18px 6px 18px;
    }
`
const vertical = css`
    display: flex;
    flex-direction: column;
`

const Menu = styled.ul`
    ${props => props.direction === "horizontal" && horizontal};
    ${props => props.direction === "vertical" && vertical};
    list-style: none;
    width: 100%;
`

export default Menu