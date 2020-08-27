import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/theme.context";
import { ResponsiveContext } from "../contexts/res.context"
import Logotype from "../components/header.logotype";
import Menu from "../components/menu";
import MenuItem from "../components/menu-item";
import Searchbar from "../components/header.search-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  height: 4rem;

  display: flex;
  justify-content: center;

  background-color: #4a4b58;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 100%;
  padding: 0 6px;

  color: ${(props) => props.theme.bright};
`;

const BarsIcon = styled(FontAwesomeIcon)`
    width: 1rem;
    height: 1rem;
    margin: 18px 18px 18px 6px;
    cursor: pointer
`

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { sizes, width } = useContext(ResponsiveContext)

    return (
        <HeaderBase>
            <HeaderWrapper theme={theme}>
                <Logotype />
                <Menu direction="horizontal">
                    <Searchbar theme={theme} />
                    {width > sizes.mobile &&
                        <>
                            <MenuItem>components</MenuItem>
                            <MenuItem>about</MenuItem>
                        </>
                    }
                    {width <= sizes.mobile &&
                        <BarsIcon icon={faBars} />
                    }
                </Menu>
            </HeaderWrapper>
        </HeaderBase>
    );
};

export default Header;
