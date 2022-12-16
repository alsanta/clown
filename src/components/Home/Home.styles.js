import styled from 'styled-components';

import horiClown from '../../images/clownbg.jpg'
import vertClown from '../../images/clownbg4.jpg'

export const Wrapper = styled.div`
    background-color: teal;
    min-width:100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-image: url(${vertClown});
    background-size: cover;

    @media screen and (min-width:450px){
        background-image: url(${horiClown})
    }
`