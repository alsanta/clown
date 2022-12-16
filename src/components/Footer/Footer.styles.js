import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: transparent;
    padding: 0 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;

    @media screen and (max-width:427px){
        position: fixed;
        top:0;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    max-width: 80vw;

    @media screen and (max-width:428px){
        .dropdown{
            position: relative;
            display: inline-block;
        }
        /* Dropdown Content (Hidden by Default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        /* Links inside the dropdown */
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropbtn {
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }
    }
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