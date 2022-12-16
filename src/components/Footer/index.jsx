import React, {useState} from 'react';
import MediaQuery from 'react-responsive'

// Img
import logo from '../../images/logo.png';

// Styles
import { Wrapper, Content, LogoImg, StyledLink, Dropbtn, DropDownContent, DropDownLi} from './Footer.styles';

const Footer = () => {
    const [isShown, setIsShown] = useState(false);

    const clickHandler = () =>{
        setIsShown(current => !current)
    }

    return (
        <Wrapper>
            <MediaQuery query="(min-width: 600px)">
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
                    <StyledLink to='/ShortFilm'>
                        <h1>Short Film</h1>
                    </StyledLink>
                    <StyledLink to='/Venue'>
                        <h1>Venue</h1>
                    </StyledLink>
                </Content>
            </MediaQuery>
            <MediaQuery query='(max-width: 599px)'>
                <Wrapper>
                    <DropDownLi>
                        <Dropbtn onClick={()=> clickHandler()}>
                            {/* <img src={logo} style={{height: 50, }} alt="logo" /> */}
                            <h1>Menu</h1>
                        </Dropbtn>
                        {isShown?
                        <DropDownContent>
                            {" "}
                            <StyledLink onClick={()=> clickHandler()} to='/'>
                                <h1>Home</h1>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/About'>
                                <h1>About</h1>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/Artwork'>
                                <h1>Artwork</h1>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/ShowRoom'>
                                <h1>Show Room</h1>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/ShortFilm'>
                                <h1>Short Film</h1>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/Venue'>
                                <h1>Venue</h1>
                            </StyledLink>
                        </DropDownContent>
                        :<div/>}
                    </DropDownLi>
                </Wrapper>
            </MediaQuery>
        </Wrapper>
    );
}

export default Footer;