import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StyledSearchbar = styled.input`
    width: 100%;
    max-width: 20rem;
    height: 2rem;
    border: none;
    border-radius: 3px;
    padding: 4px 26px 4px 12px;
    margin: 0 18px;

    font-family: 'Alata', sans-serif;
    font-size: 18px;
    
    background-color: ${props => props.theme.titleDark};
    color: ${props => props.theme.bright};
    
    ::placeholder {
        color: ${props => props.theme.bright};
        opacity: .6;
    }
`

const SearchbarWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: calc(20rem + 36px);
`

const SearchbarIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 24px;
    opacity: .6;
    cursor: pointer;
`

const Searchbar = (props) => {
    return (
        <SearchbarWrapper>
            <StyledSearchbar theme={props.theme} placeholder="search..."></StyledSearchbar>
            <SearchbarIcon icon={faSearch} />
        </SearchbarWrapper>
    )
}

export default Searchbar