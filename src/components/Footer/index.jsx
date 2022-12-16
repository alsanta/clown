import React from 'react';
import MediaQuery from 'react-responsive'


// Img
import logo from '../../images/logo.png';

// Styles
import { Wrapper, Content, LogoImg, StyledLink } from './Footer.styles';

const Footer = () => {
    return (
        <Wrapper>
            <MediaQuery query="(min-width: 428px)">
            <Content>
                <StyledLink class='dropdown-content' to='/'>
                    <LogoImg src={logo} alt='logo' />
                </StyledLink>
                <StyledLink class='dropdown-content' to='/About'>
                    <h1>About</h1>
                </StyledLink>
                <StyledLink class='dropdown-content' to='/Artwork'>
                    <h1>Artwork</h1>
                </StyledLink>
                <StyledLink class='dropdown-content' to='/ShowRoom'>
                    <h1>Show Room</h1>
                </StyledLink>
                <StyledLink class='dropdown-content' to='ShortFilm'>
                    <h1>Short Film</h1>
                </StyledLink>
                <StyledLink class='dropdown-content' to='Venue'>
                    <h1>Venue</h1>
                </StyledLink>
            </Content>
            </MediaQuery>
            <MediaQuery query='(max-width: 427px)'>
                <div>Test test</div>
            </MediaQuery>
        </Wrapper>
    );
}

export default Footer;