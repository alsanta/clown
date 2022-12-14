import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: transparent;
    padding: 0 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    @media screen and (max-width:428px){
        position: fixed;
        top:0;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    max-width: 1280px;

`

export const LogoImg = styled.img`
    width: 75px;
    transition: transform 1s;
    :hover{
        transform: rotate(360deg);
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: transform 1s;
    :hover {
        transform: scale(1.2);
    }
`