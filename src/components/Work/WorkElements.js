import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';


export const WorkContainer = styled.div`

display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
width:100vw;
margin-bottom: 50px;
.medium-circle{
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 115px;
    top: 200px;
    border: 1px solid #C7E0BF;
    box-sizing: border-box;
    .small-circle{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #C7E0BF;
        .small-circle-icon{
            /* font-size: 2.5rem; */
            color: #225350;
            /* margin: 0 1rem 2rem; */
        }
    }
}
.medium-circle2{
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 590px;
    top: 270px;
    border: 1px solid #C7E0BF;
    box-sizing: border-box;
    .small-circle2{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #C7E0BF;
        .img6 {
            margin: 1rem 0  0 0.7rem;
        }
    }
}
.medium-circle3{
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 105px;
    top: 225px;
    border: 1px solid #C7E0BF;
    box-sizing: border-box;
    .small-circle3{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #C7E0BF;
        .small-circle3-icon{
            font-size: 2.2rem;
           
            color: #225350;
            margin: 0 0 1rem 1rem;
        }
    }
}
.img-div{
    position: absolute;
    right: 300px;
    top: 150px;
}
.circle-container{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 8rem;
    justify-content: space-evenly;
    margin: 3rem;
    .circle-wrapper{
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        .circle{
            
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
        .text-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

}


`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:760px) {
        display: none;
    }    

`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 40px;
    background:  #225350;
    white-space: nowrap;
    padding: 15px 40px 21px;
    margin-top:1rem;
    color: #fff;
    font-size: 0.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    /* transition: all 0.2s ease-in-out; */
    text-decoration: none;
    font-weight: 500;
    font-style: normal;
    font-family: Pangram;
    letter-spacing: 0.1em;
    line-height: 1.875rem;

    @media screen and (max-width: 760px) {
        font-size: 0.8rem;

    } 

`;

export const WorkHeader = styled.div`

    font-family: Sunflora;
    font-weight: 400;
    font-style: normal;
    font-size: 3.125rem;
    line-height: 3.75rem;
     color: #212529;
     margin-top: 70px;





`;


