import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    @media screen and (max-width:450px){
        flex-direction:column;
    }

    min-width:100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(purple, blue);
    background-size: cover;

    h1,h3,p{
        color:white
    }
`

export const Container = styled.div`
    max-width: 200px;
    display:flex;
    flex-direction:column;
    margin-top:50px;
    margin-left:20px;

    @media screen and (max-width:450px){
        max-width: 350px;
        margin-left:20px;
    }
`
export const MapWrap = styled.div`
    border: 2px dotted red;
    min-width:80%;
    max-width:80vh;
    max-height:80vh;
    margin-top:50px;
    margin-left:50px;

    @media screen and (max-width:450px){
        max-width: 350px;
        max-height: 100vh;
        min-height: 40vh;
        margin-left:20px;
        margin-bottom:10px;
    }
`