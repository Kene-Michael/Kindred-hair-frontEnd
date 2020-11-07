import styled from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';



export const JournalContainer = styled.div`
    background: #D78678;
    width: 100vw;
    height:100%;
    color: #fff;
    padding-bottom: 5rem;
    
        .journal-heading{
            text-align: center;
            margin: 0 0 2.5rem 0;
            padding-top: 2rem;
            font-family: Sunflora;
            font-weight: 400;
            font-style: normal;
            font-size: 50px;
            line-height:60px;
            letter-spacing: -5%;
        }
        .journal-img{
            margin: 0 2rem 0 2rem;
            display: grid;
            grid-template-columns: auto auto auto ;
            justify-content: space-evenly;
            /* border: 1px solid red; */
            
            .text{
                margin-top: 1rem;
                width: 350px; 
                /* width: 80%; */
            }
        }
       

`;

export const JournalBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-top: 1rem;

`;

export const JournalBtnLink = styled(LinkRouter)`
    border-radius: 20px;
    background:  #102421;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 0.75rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    font-family: Futura;
    letter-spacing: 0.1em;



    /* &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color:#fff;

    } */



`