import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width:100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-color:#050c1a;
    background-size: cover;
    padding:20px;

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        color:black;
        margin-top: 20px;
        width:fit-content;
        filter: invert();
        /* border:3px dotted red; */
    }
`
export const Headline = styled.div`
    /* border:3px dotted red; */
    color:#ce2870;
    padding-left: 10px;
    font-size: 3rem;
    font-weight: 700;
    width:fit-content;
    border-left: 4px solid #fb0061;
    margin-bottom: 20px;
`
export const Content = styled.div`
    /* border:3px dotted red; */
    display:flex;
    gap: 30px;
    width: 40%;
    color:white;
`