import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavLink = styled(Link)`
    color:inherit;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`


export default NavLink