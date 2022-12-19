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
                        <p>About</p>
                    </StyledLink>
                    <StyledLink to='/Artwork'>
                        <p>Artwork</p>
                    </StyledLink>
                    <StyledLink to='/ShowRoom'>
                        <p>Show Room</p>
                    </StyledLink>
                    <StyledLink to='/ShortFilm'>
                        <p>Short Film</p>
                    </StyledLink>
                    <StyledLink to='/Venue'>
                        <p>Venue</p>
                    </StyledLink>
                </Content>
            </MediaQuery>
            <MediaQuery query='(max-width: 599px)'>
                <Wrapper>
                    <DropDownLi>
                        <Dropbtn onClick={()=> clickHandler()}>
                            {/* <img src={logo} style={{height: 50, }} alt="logo" /> */}
                            <p>Menu</p>
                        </Dropbtn>
                        {isShown?
                        <DropDownContent>
                            {" "}
                            <StyledLink onClick={()=> clickHandler()} to='/'>
                                <p>Home</p>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/About'>
                                <p>About</p>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/Artwork'>
                                <p>Artwork</p>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/ShowRoom'>
                                <p>Show Room</p>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/ShortFilm'>
                                <p>Short Film</p>
                            </StyledLink>
                            <StyledLink onClick={()=> clickHandler()} to='/Venue'>
                                <p>Venue</p>
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