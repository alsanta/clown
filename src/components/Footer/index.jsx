import React from 'react';
import { Link } from 'react-router-dom';

// Img
import logo from '../../images/logo.png';

// Styles
import { Wrapper, Content, LogoImg, StyledLink } from './Footer.styles';

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <StyledLink to='/'>
                    <LogoImg src={logo} alt='logo' />
                </StyledLink>
                <StyledLink to='/About'>
                    <h1>About</h1>
                </StyledLink>
                <StyledLink to='/Artwork'>
                    <h1>Artwork</h1>
                </StyledLink>
                <StyledLink to='/ShowRoom'>
                    <h1>Show Room</h1>
                </StyledLink>
                <StyledLink to='ShortFilm'>
                    <h1>Short Film</h1>
                </StyledLink>
                <StyledLink to='Venue'>
                    <h1>Venue</h1>
                </StyledLink>
            </Content>
        </Wrapper>
    );
}

export default Footer;