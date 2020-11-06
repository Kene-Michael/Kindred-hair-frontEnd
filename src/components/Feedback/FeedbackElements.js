import styled from "styled-components"
import {Link as LinkRouter} from 'react-router-dom';

export const FeedbackContainer = styled.div`
    background: #E5E5E5;
    width: 100vw;
    height: 100%;
    .text{
        padding-top: 3rem;
        text-align: center;
        font-family: Sunflora;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 60px;
        /* identical to box height, or 120% */

        letter-spacing: -0.05em;

        color: #102421;
    }
    .circle-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 8rem;
        justify-content: space-evenly;
        margin: 3rem 8rem 0 8rem;
        .circle-wrapper{
            position: relative;
            margin-bottom: 2rem ;
            .circle1{
                position: absolute;
                width: 250px;
                height: 250px;
                border-radius: 50%;
                
                left: -20px;
                top:5px;
                background: #264560; 
            }
            .circle2 {
                position: absolute;
                width: 250px;
                height: 250px;
                border-radius: 50%;
                
                left: -20px;
                top:5px;
                background: #ED5D37;
            }
            .circle3 {
                position: absolute;
                width: 250px;
                height: 250px;
                border-radius: 50%;
                
                
                left: -20px;
                top:5px;
                background: #C8E0BE; 
            }
            .img {
                position: relative;
                width: 260px;
                height: 260px;
                border-radius: 50%;
                
                
                z-index: 1;
            }
        }

        .text-paragraph{
            font-family: Pangram;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            /* or 143% */


            color: #262626;
            margin-bottom: 6rem;
            h2{
                margin: 0.5rem 0;
                font-family: Sunflora;
                font-style: normal;
                font-weight: normal;
                font-size: 27px;
                line-height: 40px;
                /* identical to box height, or 222% */
            }
        }
    }
`

export const NavBtn = styled.nav`
    position: absolute;
    display: flex;
    align-items: center;
    top: 230px;
    z-index: 2;
    left: 100px;
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 20px;
    background:  #FDEBA3;
    white-space: nowrap;
    padding: 15px 35px;
    color: #000;
    font-size: 0.75rem;
    outline: none;
    border: none;
    cursor: pointer;
    /* transition: all 0.2s ease-in-out; */
    text-decoration: none;

    font-family: Futura;
    letter-spacing: 0.1em;



    /* &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color:#fff;

    } */



`




