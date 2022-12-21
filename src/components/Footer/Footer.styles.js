import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: transparent;
    padding: 0 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;

    @media screen and (max-width:599px){
        position: fixed;
        top:0;
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    max-width: 100vw;
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
    color: white;
    text-shadow: -1px 0 black;
    transition: transform 1s;
    :hover {
        transform: scale(1.2);
    }
`

export const StyledLi = styled.li`
    float: left;
`;

export const Dropbtn = styled.div`
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color:white;
`;

export const DropDownContent = styled.div`
    background-color: black;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover {
    }
    &:hover ${DropDownContent} {
        display: block;
    }
`;