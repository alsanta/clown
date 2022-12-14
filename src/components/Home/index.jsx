import React from 'react';

import background from '../../images/background.jpg';
import vertClown from '../../images/vertClown2.jpg'

import { Background, Wrapper } from './Home.styles';
const Home = (props) => {

    return (
        <Wrapper>
            <Background img src={vertClown}>
            </Background>
        </Wrapper>
    );
}

export default Home